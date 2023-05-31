import React from "react";
import Card from "../../UI/Card";
import "./EditCus.css";
import Title from "../../components/Title";
const OrderService = () => {
    return (
        <>
            <div className="bg user-navbar d-flex" />
            <Title
                title="ĐƠN HÀNG"
                color="white"
                fontSize="35px"
                fontWeight="700"
                padding="2% 0 0 13vw"
            />
            <div className="table-cus table-responsive ">
                <Card>
                    <table class="table table-bordered table-striped text-center"
                        style={{ fontSize: "18px", fontWeight: "400" }}
                    >
                        <thead>
                            <tr>
                                <th scope="col">STT</th>
                                <th scope="col">Công việc</th>
                                <th scope="col">Ngày làm</th>
                                <th scope="col">Khách hàng</th>
                                <th scope="col">Số điện thoại</th>
                                <th scope="col">Giao dịch</th>
                                <th scope="col">Trạng thái</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Vệ sinh máy lạnh [Treo tường] dưới 2hp</td>
                                <td>19:00, 25/05/555</td>
                                <td>An Khoa</td>
                                <td>23456789JQKA</td>
                                <td>Tiền mặt</td>
                                <td><button type="button" class="btn btn-outline-success">Xác nhận</button></td>

                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Vệ sinh máy lạnh [Treo tường] dưới 2hp</td>
                                <td>19:00, 25/05/555</td>
                                <td>An Khoa</td>
                                <td>23456789JQKA</td>
                                <td>Chuyển khoản</td>
                                <td><button type="button" class="btn btn-outline-success" disabled>Đã hoàn tất</button></td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Vệ sinh máy lạnh [Treo tường] dưới 2hp</td>
                                <td>19:00, 25/05/555</td>
                                <td>An Khoa</td>
                                <td>23456789JQKA</td>
                                <td>Tiền mặt</td>
                                <td><button type="button" class="btn btn-outline-success" disabled>Đã hoàn tất</button></td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>Vệ sinh máy lạnh [Treo tường] dưới 2hp</td>
                                <td>19:00, 25/05/555</td>
                                <td>An Khoa</td>
                                <td>23456789JQKA</td>
                                <td>Tiền mặt</td>
                                <td><button type="button" class="btn btn-outline-success" disabled>Đã hoàn tất</button></td>
                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td>Vệ sinh máy lạnh [Treo tường] dưới 2hp</td>
                                <td>19:00, 25/05/555</td>
                                <td>An Khoa</td>
                                <td>23456789JQKA</td>
                                <td>Tiền mặt</td>
                                <td><button type="button" class="btn btn-outline-success" disabled>Đã hoàn tất</button></td>
                            </tr>
                            <tr>
                                <th scope="row">6</th>
                                <td>Vệ sinh máy lạnh [Treo tường] dưới 2hp</td>
                                <td>19:00, 25/05/555</td>
                                <td>An Khoa</td>
                                <td>23456789JQKA</td>
                                <td>Tiền mặt</td>
                                <td><button type="button" class="btn btn-outline-success" disabled>Đã hoàn tất</button></td>
                            </tr>
                            <tr>
                                <th scope="row">7</th>
                                <td>Vệ sinh máy lạnh [Treo tường] dưới 2hp</td>
                                <td>19:00, 25/05/555</td>
                                <td>An Khoa</td>
                                <td>23456789JQKA</td>
                                <td>Tiền mặt</td>
                                <td><button type="button" class="btn btn-outline-success" disabled>Đã hoàn tất</button></td>
                            </tr>
                            <tr>
                                <th scope="row">8</th>
                                <td>Vệ sinh máy lạnh [Treo tường] dưới 2hp</td>
                                <td>19:00, 25/05/555</td>
                                <td>An Khoa</td>
                                <td>23456789JQKA</td>
                                <td>Tiền mặt</td>
                                <td><button type="button" class="btn btn-outline-success" disabled>Đã hoàn tất</button></td>
                            </tr>
                        </tbody>
                    </table>
                </Card>
            </div>
        </>
    );
};

export default OrderService;
