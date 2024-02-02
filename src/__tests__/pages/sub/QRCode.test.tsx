import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import "@testing-library/jest-dom/vitest";
import QRCode from "@/pages/sub/QRCode";

describe("QRCode", () => {

  beforeEach(() => {
    Object.defineProperty(window, "location", {
      value: {
        href: "http://localhost:3000",
      },
      writable: false,
    });
  });

  it("has QR code", async () => {
    render(<QRCode/>)

    // it has url
    expect(screen.getByText("http://localhost:3000")).not.toBeNull();

    // it has svg (that should be QR code)
    expect(document.querySelector("svg")).not.toBeNull();
  });

});