"use client";
import Spline from "@splinetool/react-spline";

export default function SplineRobot() {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-auto sm:w-[1500px] xl:left-auto xl:right-0 xl:top-1/2 xl:-translate-x-[250px] z-10">
      <Spline scene="https://prod.spline.design/C84TSm56dKrXIeQk/scene.splinecode" />
    </div>
  );
}
