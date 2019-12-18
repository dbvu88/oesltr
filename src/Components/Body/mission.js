import React from "react";

function Component() {
  const data = [
    {
      title: "Room Admin",
      description: `nhiệm vụ của bạn là giám sát room, kick hoặc ban những chatters có những hành vi tiêu cực trong room`
    },
    {
      title: "Instructor/Tutor",
      description: `bạn không cần phải là những người có bằng cấp hoặc kinh nghiệm giảng dạy, chỉ cần bạn
        có vốn hiểu biết rộng và thích chia sẽ những hiểu biết của mình, bạn có thể tự do chọn giờ giắc riêng của mình`
    },
    {
      title: "Lập Trình Viên",
      description: `bạn sẽ có cơ hội được chung sức phát triển những giự án IT rất thú vị`
    },
    {
      title: "Thiết Kế Đồ Họa Viên",
      description: `bạn sẽ có cơ hội được thể hiện những tài năng về hội họa`
    },
    {
      title: "Nhân Viên Quản Lý Mạng Xã Hội",
      description: `nhiệm vụ cao cả của bạn là đi quảng bá room, giúp cho room có thêm nhiều người biết đến, nhiều followers, và tình nguyện viên`
    },
    {
      title: "Contents Creator",
      description: `vào mỗi buổi học bạn có thể chép bài hoặc record lại bài học và đăng lên mạng xã hội để ai cũng có thể cập những những buổi học mà họ bỏ lỡ`
    }
  ];
  return [
    <h1 className="display-4">Mục Tiêu</h1>,
    <p className="lead text-left">
      Room luôn nổ lực không ngừng để xây dựng một diễn đàn thân thiện và miễn
      phí trong việc chia sẽ và tryền đạt những kiến thức và kinh nghiệm học
      Tiếng Anh cho người Việt Nam.
    </p>,
    <p className="lead text-left">
      Để làm được điều này Room cần thêm tình nguyện viên để tham gia vào việc
      xây dựng room. Bạn có thể gửi email trực tiếp qua{" "}
      <a href="mailto:OnlineEslTutoringRoom@gmail.com">
        OnlineEslTutoringRoom@gmail.com
      </a>{" "}
      để đăng ký làm tình nguyện viên cho những vị trí sau:
    </p>,
    <small style={{ color: "red" }}>
      * Bạn xin lưu ý vì chúng tôi là một tổ chức từ thiện, và bạn sẽ tham gia
      với tư cách là một tình nguyện viên, chúng tối sẽ không có đủ khả năng để
      trả lương cho bạn
    </small>,

    <div className="list-group text-left">
      {data.map(item => (
        <div className="list-group-item list-group-item-action">
          <div className="d-flex w-100 justify-content-between">
            <h5 class="mb-1">{item.title}</h5>
            {/* <small>3 days ago</small> */}
          </div>
          <p class="mb-1">{item.description}</p>
          {/* <small>Donec id elit non mi porta.</small> */}
        </div>
      ))}
    </div>,

    <p className="lead text-left">
      Nếu room không có những vị trí tình nguyện viên phù hợp cho bạn nhưng bạn
      lại có những ý tưởng và đóng góp khác, bạn hãy cứ liên lạc cho room qua{" "}
      <a href="mailto:OnlineEslTutoringRoom@gmail.com">
        OnlineEslTutoringRoom@gmail.com
      </a>
      ! Xin cảm ơn tức cả các đóng góp của các bạn.
    </p>
  ];
}

export default Component;
