import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeAll, describe, expect, it, vi } from "vitest";
import "@testing-library/jest-dom/vitest";
import Signup from "@/pages/Signup";
import { PropsWithChildren } from "react";
import { setErrorMap } from "zod";
import { globalErrorMap } from "@/validations/globalErrorMap";
import QueryClientProvider from "@/api/QueryClientProvider";
import { BrowserRouter } from "react-router-dom";

vi.mock("@/components/AppFrame", () => ({
  default: ({ children }: PropsWithChildren) => {
    return <div>AppFrame{children}</div>
  }
}));

vi.mock("@/components/ModalWindow", () => ({
  default: () => {
    return <div>ModalWindow</div>
  }
}));

function wrapper({ children }: PropsWithChildren) {
  return (
      <QueryClientProvider>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </QueryClientProvider>
  )
}

describe("Sign up form validation", () => {
  beforeAll(() => {
    setErrorMap(globalErrorMap);
  })

  /* Name */
  it("validate name", async () => {
    render(<Signup />, { wrapper });
    const user = userEvent.setup();
    const elem = document.querySelector("input[name='name']")
    expect(elem).not.toBeNull();

    if (elem !== null) {
      // require name
      await user.type(elem, " ")
      expect(screen.getByText("必須項目です。")).not.toBeNull();
    }
  });

  /* Email */
  it("validate email: required", async () => {
    render(<Signup />, { wrapper });
    const user = userEvent.setup();
    const elem = document.querySelector("input[name='email']")
    expect(elem).not.toBeNull();

    if (elem !== null) {
      /* test require */  //他の項目と一緒にするとエラーになる。
      await user.clear(elem);
      await user.type(elem, " ");
      expect(screen.getByText("必須項目です。")).not.toBeNull();
    }
  });

  it("validate email", async () => {
    render(<Signup />, { wrapper });
    const user = userEvent.setup();
    const elem = document.querySelector("input[name='email']")
    expect(elem).not.toBeNull();

    if (elem !== null) {
      /* validate email pattern */
      // OK
      await user.type(elem, "username@example.com");
      expect(screen.queryByText("不正なメールアドレスです。")).toBeNull();
      await user.clear(elem);

      await user.type(elem, "yamada.taro123@example.com");
      expect(screen.queryByText("不正なメールアドレスです。")).toBeNull();
      await user.clear(elem);

      // NG
      await user.type(elem, "suzuki.example.com");
      expect(screen.getByText("不正なメールアドレスです。")).not.toBeNull();
      await user.clear(elem);

      await user.type(elem, "kudou#jirou@examle.com");
      expect(screen.getByText("不正なメールアドレスです。")).not.toBeNull();
      await user.clear(elem);

      await user.type(elem, "suzuki..jirou@example.com");
      expect(screen.getByText("不正なメールアドレスです。")).not.toBeNull();
      await user.clear(elem);

      await user.type(elem, "kudouhanako.@examle.com");
      expect(screen.getByText("不正なメールアドレスです。")).not.toBeNull();
      await user.clear(elem);

      await user.type(elem, ".kudouhanako@examle.com");
      expect(screen.getByText("不正なメールアドレスです。")).not.toBeNull();
      await user.clear(elem);
    }
  }, 8000);

  /* Password */
  it("validate password: required", async () => {
    render(<Signup />, { wrapper });
    const user = userEvent.setup();
    const elem = document.querySelector("input[name='password']")
    expect(elem).not.toBeNull();

    if (elem !== null) {
      /* test require */  //他の項目と一緒にするとエラーになる。
      await user.type(elem, " ")
      expect(screen.getByText("必須項目です。")).not.toBeNull();
    }
  });

  it("validate password", async () => {
    render(<Signup />, { wrapper });
    const user = userEvent.setup();
    const elem = document.querySelector("input[name='password']")
    expect(elem).not.toBeNull();

    if (elem !== null) {
      /* validate password pattern */
      // OK
      await user.type(elem, "password");
      expect(screen.queryByText("半角英数字で入力してください。")).toBeNull();
      await user.clear(elem);

      await user.type(elem, "abc123XYZ");
      expect(screen.queryByText("半角英数字で入力してください。")).toBeNull();
      await user.clear(elem);

      // NG
      await user.type(elem, "password%");
      expect(screen.getByText("半角英数字で入力してください。")).not.toBeNull();
      await user.clear(elem);

      /* validate length is greater than or equal to 8 */
      // NG
      await user.type(elem, "abc");
      expect(screen.getByText("8文字以上で入力してください。")).not.toBeNull();
      await user.clear(elem);
    }
  });


  /* Password Confirm */
  it("validate password confirmation: required", async () => {
    render(<Signup />, { wrapper });
    const user = userEvent.setup();
    const ePwConfirm = document.querySelector("input[name='passwordConfirm']")
    expect(ePwConfirm).not.toBeNull();

    if (ePwConfirm) {
      /* test require */  //他の項目と一緒にするとエラーになる。
      await user.type(ePwConfirm, " ")
      expect(screen.getByText("必須項目です。")).not.toBeNull();
    }
  });

  it("validate password confirmation", async () => {
    render(<Signup />, { wrapper });
    const user = userEvent.setup();
    const name = document.querySelector("input[name='name']")
    const email = document.querySelector("input[name='email']")
    const ePw = document.querySelector("input[name='password']")
    const ePwConfirm = document.querySelector("input[name='passwordConfirm']")
    expect(ePwConfirm).not.toBeNull();

    if (name && email && ePw && ePwConfirm) {
      /* validate that passwords match */
      // Other validations must be completed
      await user.clear(name);
      await user.clear(email);
      await user.clear(ePw);
      await user.type(name, "taro");
      await user.type(email, "test@example.com");
      await user.type(ePw, "password");


      // OK
      await user.clear(ePwConfirm);
      await user.type(ePwConfirm, "password");
      expect(screen.queryByText("パスワードが一致しません。")).toBeNull();

      // NG
      await user.clear(ePwConfirm);
      await user.type(ePwConfirm, "PASSWORD");
      expect(screen.getByText("パスワードが一致しません。")).not.toBeNull();
    }
  });
});