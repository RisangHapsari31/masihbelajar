import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <div>
         <section className="home_banner_area">
        <div className="banner_inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="home_left_img">
                  <img src="img/banner/icang.png" alt />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="banner_content">
                  <h5>This is me</h5>
                  <h3>Risang Nihapsari Purwaning Madya Sakti</h3>
                  <a className="banner_btn" href="#">Download My CV</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    )
  }
}
