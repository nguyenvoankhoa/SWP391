import React from "react";
import Title from "../components/Title";
import NewsItem from "../components/NewsItem";

const NewsPage = () => {
  return (
    <>
      <Title color="#DD6E42" fontSize="50px" fontWeight="700" title="TIN TỨC" />
      <div className="container">
        <NewsItem
          title="TRỞ THÀNH NHÂN VIÊN GIÚP VIỆC CHUYÊN NGHIỆP"
          date="19/2/2023"
          content="Bạn đang tìm kiếm công việc làm ổn định và có thu nhập tốt? Bạn cần tìm kiếm công việc mà ở đó bạn được tự chủ quyết định thời gian phù hợp với cuộc sống gia đình mình? Chào mừng bạn đã đến với JupViec."
        />
        <NewsItem
          title="TRỞ THÀNH NHÂN VIÊN GIÚP VIỆC CHUYÊN NGHIỆP"
          date="19/2/2023"
          content="Bạn đang tìm kiếm công việc làm ổn định và có thu nhập tốt? Bạn cần tìm kiếm công việc mà ở đó bạn được tự chủ quyết định thời gian phù hợp với cuộc sống gia đình mình? Chào mừng bạn đã đến với JupViec."
        />
        <NewsItem
          title="TRỞ THÀNH NHÂN VIÊN GIÚP VIỆC CHUYÊN NGHIỆP"
          date="19/2/2023"
          content="Bạn đang tìm kiếm công việc làm ổn định và có thu nhập tốt? Bạn cần tìm kiếm công việc mà ở đó bạn được tự chủ quyết định thời gian phù hợp với cuộc sống gia đình mình? Chào mừng bạn đã đến với JupViec."
        />
        <NewsItem
          title="TRỞ THÀNH NHÂN VIÊN GIÚP VIỆC CHUYÊN NGHIỆP"
          date="19/2/2023"
          content="Bạn đang tìm kiếm công việc làm ổn định và có thu nhập tốt? Bạn cần tìm kiếm công việc mà ở đó bạn được tự chủ quyết định thời gian phù hợp với cuộc sống gia đình mình? Chào mừng bạn đã đến với JupViec."
        />
      </div>
    </>
  );
};

export default NewsPage;
