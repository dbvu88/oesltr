import React from "react";

function Component() {
  return [
    <h1 className="display-4">Hướng Dẫn</h1>,
    <p className="lead">
      Cách thức tham gia room giành cho những thành viên mới:
    </p>,
    <p className="lead" />,
    <ol className=" mt-3 mb-4 text-left">
      <li>
        Click vào{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.paltalk.com/g2/paltalk/1643899719"
        >
          đây
        </a>{" "}
        để xem profile của room trên trang web của Paltalk.
      </li>
      <li>Bấm vào Join Room</li>
      <li>
        Tải ứng dụng Paltalk và đăng ký tài khoản theo hướng dẫn của Paltalk.
      </li>
      <li>
        Sau khi tải và đăng nhập thành công, bạn vào phần tìm room, tìm room tên
        là Online ESL Tutoring Room, và nhớ lưu ý chọn Language là English
      </li>
      <li>
        Nếu có thắc mắc hay gặp sự cố tham gia room bạn hãy email cho mình qua{" "}
        <a href="mailto:OnlineEslTutoringRoom@gmail.com">
          OnlineEslTutoringRoom@gmail.com
        </a>
      </li>
    </ol>
  ];
}

export default Component;
