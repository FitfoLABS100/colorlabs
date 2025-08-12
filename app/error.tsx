"use client"

import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center gap-4 px-6 text-center">
      <h2 className="text-2xl font-semibold">Something went wrong</h2>
      <p className="text-gray-600 max-w-xl">
        {error?.message || "A client-side error occurred. Try reloading the page."}
      </p>
      <div className="flex gap-3">
        <Button onClick={() => reset()} className="logo-gradient-bg text-white font-semibold">
          Try again
        </Button>
        <Button variant="outline" onClick={() => window.location.reload()}>
          Reload
        </Button>
      </div>
      {error?.digest && (
        <p className="text-xs text-gray-400">
          {"Error ID: "}
          {error.digest}
        </p>
      )}
    </div>
  )
}
