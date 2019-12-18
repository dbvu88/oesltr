import React from "react";

function Component() {
  return [
    <h1 className="display-4">Thời Khóa Biểu</h1>,
    <p className="lead">Giờ giấc hoạt động của room như sau.</p>,
    <div className="container">
      <div className="card-deck mb-3 text-center">
        <div className="card mb-4 shadow-sm">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">Lớp Cô Tieumy_</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title">Tieumy_'s class</h1>

            <ul className="list-unstyled mt-3 mb-4">
              <li>Thứ Ba vào lúc 7h30 tối</li>
              <li>Thứ Tư vào lúc 7h30 tối</li>
              <li>Thứ Năm vào lúc 7h30 tối</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  ];
}

export default Component;
