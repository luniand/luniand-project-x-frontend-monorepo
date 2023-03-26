async function checkAuthError(errorCode: string) {
  switch (errorCode) {
    case "auth/email-already-exists":
      alert(
        "Email được cung cấp đã được một người dùng hiện tại sử dụng. Mỗi người dùng phải có một email duy nhất."
      );
      break;

    case "auth/insufficient-permission":
      alert("Thông tin đăng nhập không có quyền truy cập.");
      break;

    case "auth/internal-error":
      alert(
        "Máy chủ xác thực đã gặp lỗi không mong muốn khi cố gắng xử lý yêu cầu."
      );
      break;

    case "auth/invalid-credential":
      alert("Không thể sử dụng thông tin đăng nhập.");
      break;

    case "auth/invalid-email":
      alert("Email không hợp lệ.");
      break;

    case "auth/invalid-password":
      alert("Mật khẩu không hợp lệ. Mật khẩu có ít nhất sáu ký tự.");
      break;

    case "auth/invalid-user-import":
      alert("Bản ghi người dùng để nhập không hợp lệ.");
      break;

    case "auth/maximum-user-count-exceeded":
      alert("Đã vượt quá số lượng người dùng được phép tối đa để nhập.");
      break;

    case "auth/session-cookie-expired":
      alert("Phiên làm việc đã bị hết hạn.");
      break;

    case "auth/session-cookie-revoked":
      alert("Phiên làm việc đã bị xóa.");
      break;

    case "auth/uid-already-exists":
      alert(
        "Người dùng hiện có đã sử dụng uid được cung cấp. Mỗi người dùng phải có một uid duy nhất."
      );
      break;

    case "auth/user-not-found":
      alert(
        "Không có bản ghi người dùng hiện có tương ứng với số nhận dạng được cung cấp."
      );
      break;
  }
}

export default checkAuthError;
