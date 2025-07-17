type ErrorResponse = {
  success: boolean;
  message: {
    en: string;
    ar: string;
    [key: string]: string;
  };
  errorCode: number;
  data: null;
};

type AntDesignValidationError = {
  errorFields?: Array<{
    name: string[];
    errors: string[];
    warnings?: string[];
  }>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  values: Record<string, any>;
  outOfDate: boolean;
};

const fallbackMessages: Record<string, Record<string, string>> = {
  VALIDATION_ERROR: {
    en: "Validation Error Occurred",
    ar: "حدث خطأ في التحقق من الصحة",
  },
  GENERIC_ERROR: {
    en: "An Error Occurred",
    ar: "حدث خطأ",
  },
  UNKNOWN_ERROR: {
    en: "An Unknown Error Occurred",
    ar: "حدث خطأ غير معروف",
  },
};

export function getErrorMessage(error: unknown, lang: string = "en"): string {
  if (isAntDesignValidationError(error)) {
    return (
      extractAntDesignError(error) ||
      getFallbackMessage("VALIDATION_ERROR", lang)
    );
  }

  if (isStandardErrorResponse(error)) {
    const parsedMessage = parseMessageField(error.message);
    if (typeof parsedMessage === "object" && parsedMessage !== null) {
      return (
        parsedMessage[lang] ||
        parsedMessage.en ||
        getFallbackMessage("GENERIC_ERROR", lang)
      );
    }
  }

  if (error instanceof Error) {
    return error.message;
  }

  if (typeof error === "string") {
    return error;
  }

  return getFallbackMessage("UNKNOWN_ERROR", lang);
}

function getFallbackMessage(
  key: keyof typeof fallbackMessages,
  lang: string
): string {
  return fallbackMessages[key][lang] || fallbackMessages[key].en;
}

function isAntDesignValidationError(
  error: unknown
): error is AntDesignValidationError {
  return (
    typeof error === "object" &&
    error !== null &&
    "errorFields" in error &&
    Array.isArray((error as AntDesignValidationError).errorFields)
  );
}

function extractAntDesignError(error: AntDesignValidationError): string | null {
  const firstErrorField = error.errorFields?.[0];
  return firstErrorField?.errors?.[0] || null;
}

function isStandardErrorResponse(error: unknown): error is ErrorResponse {
  return typeof error === "object" && error !== null && "message" in error;
}

function parseMessageField(message: unknown): Record<string, string> | string {
  if (typeof message === "string") {
    try {
      const parsed = JSON.parse(message);
      if (typeof parsed === "object" && parsed !== null) {
        return parsed;
      }
    } catch {
      // Ignore parse error, fall back to raw string
    }
    return message;
  }

  return message as Record<string, string>;
}
