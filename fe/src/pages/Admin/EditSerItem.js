import React from "react"
import Card from "../../UI/Card";
import "./EditCustomerItem.css";
import Title from "../../components/Title";

const EditSerItem = () => {

    return (
        <>
            <div className="bg user-navbar d-flex" />
            <Title
                title="DỊCH VỤ"
                color="white"
                fontSize="35px"
                fontWeight="700"
                padding="2% 0 0 18vw"
            />
            <div className="form-cus">
                <div className="form-cus-item">
                    <Card>
                        <div class="container">


                            <div class="row">
                                <div class="">
                                    <h6 class="mb-2 text-primary">Thông tin dịch vụ</h6>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="fullName"> Công việc</label>
                                        <input type="text" class="form-control" value="Vệ sinh nệm, sofa, thảm" />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="eMail">Loại</label>
                                        <input type="text" class="form-control" value="Sofa	" />
                                    </div>
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div class="form-group">
                                        <label for="phone">Chi tiết</label>
                                        <input type="text" class="form-control" id="phone" value="23456789JQK" />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div className="row ">
                                        <div class="form-group col-md-12">
                                            <label for="website">Giá</label>
                                            <input type="text" class="form-control" id="website" value="360000" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="container update-cus">
                                <div class=" d-flex flex-row-reverse">
                                    <div>
                                        <button type="button" id="submit" name="submit" class="btn btn-primary">Update</button>
                                    </div>
                                    <div>
                                        <button type="button" id="submit" name="submit" class="btn btn-secondary ">Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card >
                </div>
            </div>
        </>

    )
}

export default EditSerItem
