"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

export default function MotionModal({
  open,
  onClose,
  title,
  icon: Icon,
  content,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  content: React.ReactNode;
}) {
  const overlayRef = useRef<HTMLDivElement | null>(null);

  // ESC to close
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // Lock page scroll, but allow overlay to scroll
  useEffect(() => {
    if (!open) return;
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = prev;
    };
  }, [open]);

  // On open / rotate, make sure overlay is at top (so header is reachable)
  useEffect(() => {
    if (!open) return;
    const toTop = () =>
      overlayRef.current?.scrollTo({ top: 0, left: 0, behavior: "auto" });

    toTop();

    // Handle iOS address bar / rotation changes
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const vv = (window as any).visualViewport as VisualViewport | undefined;
    const onResize = () => toTop();
    window.addEventListener("orientationchange", onResize);
    window.addEventListener("resize", onResize);
    vv?.addEventListener?.("resize", onResize);

    return () => {
      window.removeEventListener("orientationchange", onResize);
      window.removeEventListener("resize", onResize);
      vv?.removeEventListener?.("resize", onResize);
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={overlayRef}
          className="
            fixed inset-0 z-[101]
            overflow-y-auto overscroll-contain
            pt-[max(env(safe-area-inset-top),16px)]
            pb-[max(env(safe-area-inset-bottom),16px)]
            px-4
          "
          style={{ minHeight: "100dvh" }} // more reliable than 100vh on mobile
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop (kept behind via pointer-events) */}
          <motion.div
            aria-hidden
            className="fixed inset-0 bg-black/70 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Flex wrapper: centers when short, scrolls when tall */}
          <div className="flex min-h-[100dvh] items-center justify-center">
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={title}
              className="
                w-[92vw] max-w-xl
                rounded-2xl border border-white/10
                bg-neutral-900/80 backdrop-blur-md text-white
                shadow-2xl
                flex flex-col
                /* cap the panel height and let its body scroll */
                max-h-[calc(100dvh-48px)]
              "
              initial={{ scale: 0.96, opacity: 0, y: 12 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.98, opacity: 0, y: 8 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
            >
              {/* header (fixed inside the panel) */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 shrink-0">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-main-primary/30 bg-main-primary/10">
                    <Icon className="h-5 w-5 text-main-primary" />
                  </span>
                  <h3 className="text-lg font-semibold">{title}</h3>
                </div>
                <button
                  onClick={onClose}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-main-primary/60"
                  autoFocus
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* body (scrolls independently) */}
              <div
                className="
                  px-5 py-5
                  overflow-y-auto
                  touch-pan-y
                  grow
                "
              >
                <div className="prose prose-invert max-w-none">{content}</div>
              </div>
            </motion.div>
          </div>

          {/* Click-through close area (optional): full-screen button above backdrop but below panel */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="fixed inset-0"
            style={{ zIndex: -1 }} // panel remains on top; overlay captures clicks outside panel
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
