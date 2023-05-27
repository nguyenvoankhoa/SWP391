import React from "react";
import Title from "../components/Title";
import NewsItem from "../components/NewsItem";

const NewsPage = () => {
  return (
    <>
      <Title color="#015450" fontSize="50px" fontWeight="600" title="TIN TỨC" />
      <div className="container">
        <NewsItem
          title="TRỞ THÀNH NHÂN VIÊN GIÚP VIỆC CHUYÊN NGHIỆP"
          date="19/2/2023"
          content="Bạn đang tìm kiếm công việc làm ổn định và có thu nhập tốt? Bạn cần tìm kiếm công việc mà ở đó bạn được tự chủ quyết định thời gian phù hợp với cuộc sống gia đình mình? Chào mừng bạn đã đến với CleanShine."
        />
        <NewsItem
          title="TRỞ THÀNH NHÂN VIÊN GIÚP VIỆC CHUYÊN NGHIỆP"
          date="19/2/2023"
          content="Bạn đang tìm kiếm công việc làm ổn định và có thu nhập tốt? Bạn cần tìm kiếm công việc mà ở đó bạn được tự chủ quyết định thời gian phù hợp với cuộc sống gia đình mình? Chào mừng bạn đã đến với CleanShine."
        />
        <NewsItem
          title="TRỞ THÀNH NHÂN VIÊN GIÚP VIỆC CHUYÊN NGHIỆP"
          date="19/2/2023"
          content="Bạn đang tìm kiếm công việc làm ổn định và có thu nhập tốt? Bạn cần tìm kiếm công việc mà ở đó bạn được tự chủ quyết định thời gian phù hợp với cuộc sống gia đình mình? Chào mừng bạn đã đến với CleanShine."
        />
        <NewsItem
          title="TRỞ THÀNH NHÂN VIÊN GIÚP VIỆC CHUYÊN NGHIỆP"
          date="19/2/2023"
          content="Bạn đang tìm kiếm công việc làm ổn định và có thu nhập tốt? Bạn cần tìm kiếm công việc mà ở đó bạn được tự chủ quyết định thời gian phù hợp với cuộc sống gia đình mình? Chào mừng bạn đã đến với CleanShine."
        />
    <nav aria-label="Page navigation">
      <ul class="pagination pg-blue justify-content-end">
        <li class="page-item disabled">
            <a class="page-link" href="#previous" tabindex="-1">Previous</a>
        </li>
          <li class="page-item"><a class="page-link" href="#new1">1</a></li>
          <li class="page-item"><a class="page-link" href="#new2">2</a></li>
          <li class="page-item"><a class="page-link" href="#new3">3</a></li>
        <li class="page-item">
          <a class="page-link" href="#next">Next</a>
        </li>
      </ul>
    </nav>
      </div>
    </>
  );
};

export default NewsPage;
