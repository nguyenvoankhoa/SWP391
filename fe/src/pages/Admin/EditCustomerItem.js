import React from "react"
import Card from "../../UI/Card";
import "./EditCustomerItem.css";
import Title from "../../components/Title";

const EditCustomerItem = () => {

    return (
        <>
            <div className="bg user-navbar d-flex" />
            <Title
                title="KHÁCH HÀNG"
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
                                    <h6 class="mb-2 text-primary">Thông tin khách hàng</h6>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="fullName"> Tên</label>
                                        <input type="text" class="form-control" value="An" />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="eMail">Email</label>
                                        <input type="text" class="form-control" value="andy@gmail.com" />
                                    </div>
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div class="form-group">
                                        <label for="phone">Phone</label>
                                        <input type="text" class="form-control" id="phone" value="23456789JQK" />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div className="row d-flex">
                                        <div class="form-group col-md-6">
                                            <label for="website">Số Toà</label>
                                            <input type="text" class="form-control" id="website" value="S202" />
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="website">Số Phòng</label>
                                            <input type="text" class="form-control" id="website" value="202" />
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

export default EditCustomerItem
