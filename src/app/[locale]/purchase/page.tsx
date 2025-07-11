"use client";

import type React from "react";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Upload,
  X,
  CheckCircle,
  Check,
  CreditCard,
  Wallet,
  Building2,
  Target,
  GraduationCap,
  BookOpen,
  Lightbulb,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/ui/card";
import { Label } from "../../../components/ui/label";
import { Input } from "../../../components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../../../components/ui/dialog";
import { Alert, AlertDescription } from "../../../components/ui/alert";
import { useLocale } from "next-intl";

export default function PurchasePage() {
  const locale = useLocale();
  const router = useRouter();
  const searchParams = useSearchParams();
  const courseId = searchParams.get("course");
  const semesterIds =
    searchParams.get("semesters")?.split(",").map(Number) || [];

  const [formData, setFormData] = useState({
    paymentMethod: "",
    // Credit Card fields
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardholderName: "",
    // PayPal fields
    paypalEmail: "",
    // Bank Transfer fields
    accountNumber: "",
    routingNumber: "",
    bankName: "",
    // Apple Pay fields
    appleId: "",
    // Google Pay fields
    googleEmail: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const semesters = [
    { id: 1, name: "Semester 1: Frontend Foundations", price: 299 },
    { id: 2, name: "Semester 2: Advanced Frontend", price: 299 },
    { id: 3, name: "Semester 3: Backend Development", price: 299 },
    { id: 4, name: "Semester 4: Full Stack Integration", price: 299 },
  ];

  const selectedSemesters = semesters.filter((s) => semesterIds.includes(s.id));
  const totalPrice = selectedSemesters.reduce((sum, s) => sum + s.price, 0);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.paymentMethod) {
      newErrors.paymentMethod = "Payment method is required";
    }

    // Dynamic validation based on payment method
    switch (formData.paymentMethod) {
      case "visa":
      case "mastercard":
        if (!formData.cardNumber)
          newErrors.cardNumber = "Card number is required";
        if (!formData.expiryDate)
          newErrors.expiryDate = "Expiry date is required";
        if (!formData.cvv) newErrors.cvv = "CVV is required";
        if (!formData.cardholderName)
          newErrors.cardholderName = "Cardholder name is required";
        break;
      case "paypal":
        if (!formData.paypalEmail)
          newErrors.paypalEmail = "PayPal email is required";
        break;
      case "bank-transfer":
        if (!formData.accountNumber)
          newErrors.accountNumber = "Account number is required";
        if (!formData.routingNumber)
          newErrors.routingNumber = "Routing number is required";
        if (!formData.bankName) newErrors.bankName = "Bank name is required";
        break;
      case "apple-pay":
        if (!formData.appleId) newErrors.appleId = "Apple ID is required";
        break;
      case "google-pay":
        if (!formData.googleEmail)
          newErrors.googleEmail = "Google email is required";
        break;
    }

    if (uploadedFiles.length === 0) {
      newErrors.files = "At least one file must be uploaded";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setUploadedFiles((prev) => [...prev, ...files]);
    if (errors.files) {
      setErrors((prev) => ({ ...prev, files: "" }));
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setShowSuccessModal(true);
    }, 2000);
  };

  const handleSuccessClose = () => {
    setShowSuccessModal(false);
    router.push("/");
  };

  const renderPaymentFields = () => {
    switch (formData.paymentMethod) {
      case "visa":
      case "mastercard":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200"
          >
            <div className="flex items-center space-x-2 mb-4">
              <CreditCard className="w-5 h-5 text-[#001C71]" />
              <h3 className="font-semibold text-[#001C71]">
                Credit/Debit Card Information
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <Label htmlFor="cardholderName">Cardholder Name *</Label>
                <Input
                  id="cardholderName"
                  name="cardholderName"
                  placeholder="John Doe"
                  value={formData.cardholderName}
                  onChange={handleInputChange}
                  className={errors.cardholderName ? "border-red-500" : ""}
                />
                {errors.cardholderName && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.cardholderName}
                  </p>
                )}
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="cardNumber">Card Number *</Label>
                <Input
                  id="cardNumber"
                  name="cardNumber"
                  placeholder="1234 5678 9012 3456"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  className={errors.cardNumber ? "border-red-500" : ""}
                />
                {errors.cardNumber && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.cardNumber}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="expiryDate">Expiry Date *</Label>
                <Input
                  id="expiryDate"
                  name="expiryDate"
                  placeholder="MM/YY"
                  value={formData.expiryDate}
                  onChange={handleInputChange}
                  className={errors.expiryDate ? "border-red-500" : ""}
                />
                {errors.expiryDate && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.expiryDate}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="cvv">CVV *</Label>
                <Input
                  id="cvv"
                  name="cvv"
                  placeholder="123"
                  value={formData.cvv}
                  onChange={handleInputChange}
                  className={errors.cvv ? "border-red-500" : ""}
                />
                {errors.cvv && (
                  <p className="text-sm text-red-500 mt-1">{errors.cvv}</p>
                )}
              </div>
            </div>
          </motion.div>
        );

      case "paypal":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-4 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border border-blue-300"
          >
            <div className="flex items-center space-x-2 mb-4">
              <Wallet className="w-5 h-5 text-[#0070ba]" />
              <h3 className="font-semibold text-[#0070ba]">
                PayPal Information
              </h3>
            </div>
            <div>
              <Label htmlFor="paypalEmail">PayPal Email *</Label>
              <Input
                id="paypalEmail"
                name="paypalEmail"
                type="email"
                placeholder="your-email@example.com"
                value={formData.paypalEmail}
                onChange={handleInputChange}
                className={errors.paypalEmail ? "border-red-500" : ""}
              />
              {errors.paypalEmail && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.paypalEmail}
                </p>
              )}
            </div>
          </motion.div>
        );

      case "bank-transfer":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-4 p-4 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg border border-teal-200"
          >
            <div className="flex items-center space-x-2 mb-4">
              <Building2 className="w-5 h-5 text-[#0EC5C7]" />
              <h3 className="font-semibold text-[#0EC5C7]">
                Bank Transfer Information
              </h3>
            </div>
            <div className="space-y-4">
              <div>
                <Label htmlFor="bankName">Bank Name *</Label>
                <Input
                  id="bankName"
                  name="bankName"
                  placeholder="Bank Name"
                  value={formData.bankName}
                  onChange={handleInputChange}
                  className={errors.bankName ? "border-red-500" : ""}
                />
                {errors.bankName && (
                  <p className="text-sm text-red-500 mt-1">{errors.bankName}</p>
                )}
              </div>
              <div>
                <Label htmlFor="accountNumber">Account Number *</Label>
                <Input
                  id="accountNumber"
                  name="accountNumber"
                  placeholder="1234567890"
                  value={formData.accountNumber}
                  onChange={handleInputChange}
                  className={errors.accountNumber ? "border-red-500" : ""}
                />
                {errors.accountNumber && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.accountNumber}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="routingNumber">Routing Number *</Label>
                <Input
                  id="routingNumber"
                  name="routingNumber"
                  placeholder="123456789"
                  value={formData.routingNumber}
                  onChange={handleInputChange}
                  className={errors.routingNumber ? "border-red-500" : ""}
                />
                {errors.routingNumber && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.routingNumber}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        );

      case "apple-pay":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-4 p-4 bg-gradient-to-r from-gray-50 to-slate-50 rounded-lg border border-gray-300"
          >
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-lg">🍎</span>
              <h3 className="font-semibold text-gray-800">
                Apple Pay Information
              </h3>
            </div>
            <div>
              <Label htmlFor="appleId">Apple ID *</Label>
              <Input
                id="appleId"
                name="appleId"
                type="email"
                placeholder="your-apple-id@icloud.com"
                value={formData.appleId}
                onChange={handleInputChange}
                className={errors.appleId ? "border-red-500" : ""}
              />
              {errors.appleId && (
                <p className="text-sm text-red-500 mt-1">{errors.appleId}</p>
              )}
            </div>
          </motion.div>
        );

      case "google-pay":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-4 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200"
          >
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-lg">🔵</span>
              <h3 className="font-semibold text-green-600">
                Google Pay Information
              </h3>
            </div>
            <div>
              <Label htmlFor="googleEmail">Google Email *</Label>
              <Input
                id="googleEmail"
                name="googleEmail"
                type="email"
                placeholder="your-email@gmail.com"
                value={formData.googleEmail}
                onChange={handleInputChange}
                className={errors.googleEmail ? "border-red-500" : ""}
              />
              {errors.googleEmail && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.googleEmail}
                </p>
              )}
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  if (!courseId || semesterIds.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#001C71] mb-4">
            Invalid Purchase Request
          </h1>
          <Link href="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#001C71] via-[#001C71] to-[#5F289E] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Elements - Same as Forms */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Educational Icons */}
        <motion.div
          animate={{
            y: [0, -25, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-16 left-16 text-[#0EC5C7] opacity-15"
        >
          <BookOpen className="w-16 h-16" />
        </motion.div>

        <motion.div
          animate={{
            y: [0, 35, 0],
            rotate: [0, -8, 8, 0],
          }}
          transition={{
            duration: 9,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-32 right-20 text-[#0EC5C7] opacity-15"
        >
          <GraduationCap className="w-20 h-20" />
        </motion.div>

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-24 left-12 text-[#0EC5C7] opacity-15"
        >
          <Lightbulb className="w-14 h-14" />
        </motion.div>

        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute bottom-16 right-16 text-[#0EC5C7] opacity-15"
        >
          <Target className="w-12 h-12" />
        </motion.div>

        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -60, 0],
              x: [0, Math.sin(i) * 30, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 5 + i * 0.3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
            className="absolute w-1.5 h-1.5 bg-[#0EC5C7] rounded-full"
            style={{
              left: `${8 + i * 6}%`,
              top: `${10 + (i % 5) * 18}%`,
            }}
          />
        ))}

        {/* Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-1/3 right-1/5 w-72 h-72 bg-[#0EC5C7] rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 0.7, 1],
            opacity: [0.08, 0.12, 0.08],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 3,
          }}
          className="absolute bottom-1/3 left-1/5 w-56 h-56 bg-[#5F289E] rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="max-w-2xl mx-auto mb-4">
          <Link
            href={`/${locale}/course/${courseId}`}
            className="inline-flex items-center text-white hover:text-[#0EC5C7] transition-colors duration-200 font-medium"
          >
            {locale === "en" ? (
              <ArrowLeft className="w-5 h-5 mr-2" />
            ) : (
              <ArrowRight className="w-5 h-5 ml-2" />
            )}
            Back to Course
          </Link>
        </div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="shadow-2xl bg-white/95 backdrop-blur-sm border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-[#001C71]">
                  Complete Your Purchase
                </CardTitle>
                <CardDescription>
                  You are purchasing {selectedSemesters.length} semester
                  {selectedSemesters.length > 1 ? "s" : ""} for the Full Stack
                  Web Development course.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Selected Semesters */}
                <div>
                  <h3 className="text-lg font-semibold text-[#001C71] mb-3">
                    Selected Semesters
                  </h3>
                  <div className="space-y-2">
                    {selectedSemesters.map((semester) => (
                      <div
                        key={semester.id}
                        className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
                      >
                        <span className="font-medium">{semester.name}</span>
                        <span className="text-[#001C71] font-bold">
                          ${semester.price}
                        </span>
                      </div>
                    ))}
                    <div className="flex justify-between items-center p-3 bg-[#001C71] text-white rounded-lg font-bold">
                      <span>Total</span>
                      <span>${totalPrice}</span>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Payment Method - Card Based (Removed STC Pay and Crypto) */}
                  <div className="space-y-4">
                    <Label className="text-lg font-semibold text-[#001C71]">
                      Choose Payment Method *
                    </Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {[
                        {
                          id: "visa",
                          name: "Visa",
                          icon: "💳",
                          color: "from-blue-500 to-blue-600",
                          description: "Credit/Debit Card",
                        },
                        {
                          id: "mastercard",
                          name: "MasterCard",
                          icon: "💳",
                          color: "from-red-500 to-red-600",
                          description: "Credit/Debit Card",
                        },
                        {
                          id: "paypal",
                          name: "PayPal",
                          icon: "🅿️",
                          color: "from-[#0070ba] to-[#003087]",
                          description: "Digital Wallet",
                        },
                        {
                          id: "apple-pay",
                          name: "Apple Pay",
                          icon: "🍎",
                          color: "from-gray-800 to-black",
                          description: "Touch/Face ID",
                        },
                        {
                          id: "google-pay",
                          name: "Google Pay",
                          icon: "🔵",
                          color: "from-green-500 to-blue-500",
                          description: "Google Wallet",
                        },
                        {
                          id: "bank-transfer",
                          name: "Bank Transfer",
                          icon: "🏦",
                          color: "from-[#0EC5C7] to-[#001C71]",
                          description: "Direct Transfer",
                        },
                      ].map((method) => (
                        <motion.div
                          key={method.id}
                          whileHover={{ scale: 1.05, y: -5 }}
                          whileTap={{ scale: 0.95 }}
                          className={`relative p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                            formData.paymentMethod === method.id
                              ? "border-[#001C71] bg-[#001C71]/5 shadow-lg"
                              : "border-gray-200 hover:border-[#0EC5C7] hover:shadow-md"
                          }`}
                          onClick={() => {
                            setFormData((prev) => ({
                              ...prev,
                              paymentMethod: method.id,
                            }));
                            if (errors.paymentMethod) {
                              setErrors((prev) => ({
                                ...prev,
                                paymentMethod: "",
                              }));
                            }
                          }}
                        >
                          {/* Background Gradient */}
                          <div
                            className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-10 rounded-xl`}
                          />

                          {/* Content */}
                          <div className="relative z-10 text-center">
                            <div className="text-2xl mb-2">{method.icon}</div>
                            <h3 className="font-semibold text-sm text-gray-900 mb-1">
                              {method.name}
                            </h3>
                            <p className="text-xs text-gray-600">
                              {method.description}
                            </p>
                          </div>

                          {/* Selection Indicator */}
                          {formData.paymentMethod === method.id && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="absolute -top-2 -right-2 w-6 h-6 bg-[#001C71] rounded-full flex items-center justify-center"
                            >
                              <Check className="w-4 h-4 text-white" />
                            </motion.div>
                          )}

                          {/* Hover Effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-br from-[#0EC5C7]/20 to-[#001C71]/20 rounded-xl opacity-0"
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                        </motion.div>
                      ))}
                    </div>
                    {errors.paymentMethod && (
                      <Alert variant="destructive">
                        <AlertDescription>
                          {errors.paymentMethod}
                        </AlertDescription>
                      </Alert>
                    )}
                  </div>

                  {/* Dynamic Payment Fields */}
                  <AnimatePresence mode="wait">
                    {renderPaymentFields()}
                  </AnimatePresence>

                  {/* File Upload */}
                  <div className="space-y-2">
                    <Label htmlFor="files">Upload Documents *</Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#0EC5C7] transition-colors">
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600 mb-2">
                        Click to upload or drag and drop files here
                      </p>
                      <Input
                        id="files"
                        type="file"
                        multiple
                        onChange={handleFileUpload}
                        className="hidden"
                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() =>
                          document.getElementById("files")?.click()
                        }
                      >
                        Choose Files
                      </Button>
                    </div>

                    {/* Uploaded Files */}
                    {uploadedFiles.length > 0 && (
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Uploaded Files:</p>
                        {uploadedFiles.map((file, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-2 bg-gray-50 rounded"
                          >
                            <span className="text-sm truncate">
                              {file.name}
                            </span>
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={() => removeFile(index)}
                            >
                              <X className="w-4 h-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    )}

                    {errors.files && (
                      <Alert variant="destructive">
                        <AlertDescription>{errors.files}</AlertDescription>
                      </Alert>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#001C71] hover:bg-[#001C71]/90"
                    disabled={isLoading}
                  >
                    {isLoading
                      ? "Processing Payment..."
                      : `Complete Purchase - $${totalPrice}`}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Success Modal */}
      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="sm:max-w-md bg-white/95 backdrop-blur-sm">
          <DialogHeader>
            <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
            <DialogTitle className="text-center text-xl font-bold text-[#001C71]">
              Purchase Successful!
            </DialogTitle>
            <DialogDescription className="text-center">
              Congratulations! You have successfully enrolled in the selected
              semesters. You will receive a confirmation email shortly with
              access details.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center mt-6">
            <Button
              onClick={handleSuccessClose}
              className="bg-[#001C71] hover:bg-[#001C71]/90"
            >
              Continue to Home
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}