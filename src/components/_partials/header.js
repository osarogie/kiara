import React from 'react'

// export const Header = props => (
//   <div>
//     <nav className="panel-menu">
//       <ul>
//         <li className="dropdown">
//           <a href="#">Pre-Order Meal</a>
//         </li>
//         <li className="dropdown">
//           <a href="#">Customise your Meal</a>
//         </li>
//         <li className="dropdown">
//           <a href="#">Drinks</a>
//         </li>
//         <li className="dropdown">
//           <a href="#">Spices</a>
//         </li>
//         <li className="dropdown">
//           <a href="#">Vegan Meals</a>
//         </li>
//         <li className="dropdown">
//           <a href="#">Subscription Packages</a>
//         </li>
//       </ul>
//       <div className="mm-navbtn-names" style={{ display: 'none' }}>
//         <div className="mm-closebtn">CLOSE</div>
//         <div className="mm-backbtn">BACK</div>
//       </div>
//     </nav>
//     <header className="no-shadow">
//       {/* <!-- mobile-header --> */}
//       <div className="mobile-header">
//         <div className="container-fluid">
//           <div className="pull-left">
//             {/* <!-- language --> */}
//             <div className="mobile-parent-language" />
//             {/* <!-- /language --> */}
//             {/* <!-- currency --> */}
//             <div className="mobile-parent-currency" />
//             {/* <!-- /currency --> */}
//             <div className="mini-menu-dropdown dropdown">
//               <a className="dropdown-toggle" data-toggle="dropdown">
//                 <span className="icon icon-more_horiz" />
//               </a>
//               <div className="dropdown-menu">
//                 <div className="mini-menu">
//                   <ul>
//                     <li className="active">
//                       <a href="/">Home</a>
//                     </li>
//                     <li>
//                       <a href="faqs">Need Help?</a>
//                     </li>
//                     <li>
//                       <a href="contact">Contact Us</a>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="pull-right">
//             {/* <!-- account --> */}
//             <div className="account dropdown">
//               <a className="dropdown-toggle" data-toggle="dropdown">
//                 <span className="icon icon-person " />
//               </a>
//               <div className="dropdown-label hidden-sm hidden-xs">
//                 My Account
//               </div>
//               <ul className="dropdown-menu">
//                 <li>
//                   <a href="#" data-toggle="modal" data-target="#modalLoginForm">
//                     <span className="icon icon-lock_outline" />Log In
//                   </a>
//                 </li>
//                 <li>
//                   <a href="login-form">
//                     <span className="icon icon-person_add" />Create an account
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             {/* <!-- /account --> */}
//             {/* <!-- cart --> */}
//             <div className="mobile-parent-cart" />
//             {/* <!-- /cart --> */}
//           </div>
//         </div>
//         <div className="container-fluid text-center">
//           {/* <!-- logo --> */}
//           <div className="logo">
//             <a href="/">
//               <img src="/static/images/logo.png" alt="" />
//             </a>
//           </div>
//           {/* <!-- /logo --> */}
//         </div>
//         <div className="container-fluid top-line">
//           <div className="pull-left">
//             <div className="mobile-parent-menu">
//               <div className="mobile-menu-toggle">
//                 <span className="icon-bar" />
//                 <span className="icon-bar" />
//                 <span className="icon-bar" />
//                 <span className="menu-text">MENU</span>
//               </div>
//             </div>
//           </div>
//           <div className="pull-right">
//             {/* <!-- search --> */}
//             <div className="search">
//               <a href="#" className="search-open">
//                 <span className="icon icon-search" />
//               </a>
//               <div className="search-dropdown">
//                 <form action="#" method="get">
//                   <div className="input-outer">
//                     <input
//                       type="search"
//                       name="search"
//                       value=""
//                       maxlength="128"
//                       placeholder="Enter keyword"
//                     />
//                     <button type="submit" className="btn-search">
//                       <span>Search</span>
//                     </button>
//                   </div>
//                   <a href="#" className="search-close">
//                     <span className="icon icon-close" />
//                   </a>
//                 </form>
//               </div>
//             </div>
//             {/* <!-- /search --> */}
//           </div>
//         </div>
//       </div>
//       {/* <!-- /mobile-header --> */}
//       {/* <!-- desktop-header --> */}
//       <div className="desktop-header  header-06">
//         <div className="container">
//           <div className="pull-left">
//             {/* <!-- mini-menu --> */}
//             <div className="mini-menu">
//               <ul>
//                 <li className="active">
//                   <a href="/">Home</a>
//                 </li>
//                 <li>
//                   <a href="faqs">Need Help?</a>
//                 </li>
//                 <li>
//                   <a href="contact">Contact Us</a>
//                 </li>
//               </ul>
//             </div>
//             {/* <!-- /mini-menu --> */}
//           </div>
//           <div className="pull-right text-right">
//             {/* <!-- box-info --> */}
//             <div className="box-info">
//               <div className="telephone">
//                 <span className="icon icon-call" />+300-9876-2345
//               </div>
//               <div className="time">7 Days a week from 9:00 am to 7:00 pm</div>
//             </div>
//             {/* <!-- /box-info --> */}
//             {/* <!-- currency --> */}
//             <div className="main-parent-currency">
//               <div className="currency dropdown select-change">
//                 <a href="#" className="dropdown-toggle">
//                   <span className="dropdown-label hidden-sm hidden-xs">
//                     Track your order
//                   </span>
//                 </a>
//               </div>
//             </div>
//             {/* <!-- /currency --> */}
//           </div>
//         </div>

//         <div className="top-line">
//           <div className="container">
//             <div className="col-md-2 col-lg-2 pull-left">
//               {/* <!-- logo --> */}
//               <div className="logo">
//                 <a href="/">
//                   <img src="/static/images/logo.png" alt="" />
//                 </a>
//               </div>
//               {/* <!-- /logo --> */}
//             </div>

//             {/* <!-- search --> */}
//             <div className="col-md-6 text-center">
//               <form method="GET" action="#" accept-charset="UTF-8">
//                 <div className="input-group" style={{ marginTop: 30 }}>
//                   <input
//                     name="search"
//                     className="form-control"
//                     placeholder="Search for restaurants"
//                     autocomplete="off"
//                     type="text"
//                   />
//                   <span className="input-group-btn">
//                     <button
//                       type="submit"
//                       style={{ marginTop: 0, marginLeft: 0, height: 53 }}
//                       className="btn btn-red"
//                     >
//                       INDULGE ME!
//                     </button>
//                   </span>
//                 </div>
//               </form>
//             </div>
//             {/* <!-- /search --> */}
//             <div className="col-md-4 col-lg-4 pull-right">
//               {/* <!-- account --> */}
//               <div className="account dropdown">
//                 <a className="dropdown-toggle" data-toggle="dropdown">
//                   <span className="icon icon-person " />
//                   <span className="dropdown-label hidden-sm hidden-xs">
//                     My Account
//                   </span>
//                 </a>
//                 <ul className="dropdown-menu">
//                   <li>
//                     <a
//                       href="#"
//                       data-toggle="modal"
//                       data-target="#modalLoginForm"
//                     >
//                       <span className="icon icon-lock_outline" />Log In
//                     </a>
//                   </li>
//                   <li>
//                     <a href="login-form">
//                       <span className="icon icon-person_add" />Create an account
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//               {/* <!-- /account --> */}
//               {/* <!-- cart --> */}
//               <div className="main-parent-cart">
//                 <div className="cart">
//                   <div className="dropdown">
//                     <a className="dropdown-toggle">
//                       <span className="icon icon-shopping_basket" />
//                       <span className="badge badge-cart">2</span>
//                       <div className="dropdown-label hidden-sm hidden-xs">
//                         YOUR BAG
//                       </div>
//                     </a>
//                     <div className="dropdown-menu slide-from-top">
//                       <div className="container">
//                         <div className="top-title">RECENTLY ADDED ITEM(S)</div>
//                         <a href="#" className="icon icon-close cart-close" />
//                         <ul>
//                           <li className="item">
//                             <div className="img">
//                               <a href="#">
//                                 <img
//                                   src="images/product/product-01.jpg"
//                                   alt=""
//                                 />
//                               </a>
//                             </div>
//                             <div className="info">
//                               <div className="title-col">
//                                 <h2 className="title">
//                                   <a href="#">
//                                     Daisy Street 3/4 Sleeve Panelled Casual
//                                     Shirt
//                                   </a>
//                                 </h2>
//                                 <div className="details">Black, XL</div>
//                               </div>
//                               <div className="price">$45</div>
//                               <div className="qty">
//                                 <div className="qty-label">Qty:</div>
//                                 <div className="style-2 input-counter">
//                                   <span className="minus-btn" />
//                                   <input type="text" value="1" size="5" />
//                                   <span className="plus-btn" />
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="item-control">
//                               <div className="delete">
//                                 <a
//                                   href="#"
//                                   className="icon icon-delete"
//                                   title="Delete"
//                                 />
//                               </div>
//                               <div className="edit">
//                                 <a
//                                   href="#"
//                                   className="icon icon-edit"
//                                   title="Edit"
//                                 />
//                               </div>
//                             </div>
//                           </li>
//                           <li className="item">
//                             <div className="img">
//                               <a href="#">
//                                 <img
//                                   src="images/product/product-01.jpg"
//                                   alt=""
//                                 />
//                               </a>
//                             </div>
//                             <div className="info">
//                               <div className="title-col">
//                                 <h2 className="title">
//                                   <a href="#">
//                                     Daisy Street 3/4 Sleeve Panelled Casual
//                                     Shirt
//                                   </a>
//                                 </h2>
//                                 <div className="details">Black, XL</div>
//                               </div>
//                               <div className="price">$45</div>
//                               <div className="qty">
//                                 <div className="qty-label">Qty:</div>
//                                 <div className="style-2 input-counter">
//                                   <span className="minus-btn" />
//                                   <input type="text" value="1" size="5" />
//                                   <span className="plus-btn" />
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="item-control">
//                               <div className="delete">
//                                 <a
//                                   href="#"
//                                   className="icon icon-delete"
//                                   title="Delete"
//                                 />
//                               </div>
//                               <div className="edit">
//                                 <a
//                                   href="#"
//                                   className="icon icon-edit"
//                                   title="Edit"
//                                 />
//                               </div>
//                             </div>
//                           </li>
//                         </ul>
//                         <h4 className="empty-cart-js hide">
//                           Your Cart is Empty
//                         </h4>
//                         <div className="cart-bottom">
//                           <div className="pull-right">
//                             <div className="pull-left">
//                               <div className="cart-total">
//                                 TOTAL: <span> $135.00</span>
//                               </div>
//                             </div>
//                             <a
//                               href="checkout"
//                               className="btn icon-btn-left"
//                             >
//                               <span className="icon icon-check_circle" />CHECKOUT
//                             </a>
//                           </div>
//                           <div className="pull-left">
//                             <a
//                               href="shopping_cart_01"
//                               className="btn icon-btn-left"
//                             >
//                               <span className="icon icon-shopping_basket" />VIEW
//                               CART
//                             </a>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               {/* <!-- /cart --> */}
//             </div>
//           </div>
//         </div>
//         <div className="fill-bg-base">
//           <div className="container">
//             <div className="text-center">
//               <div className="menu-parent-box">
//                 {/* <!-- header-menu --> */}
//                 <nav className="header-menu">
//                   <ul>
//                     <li className="dropdown">
//                       <a href="#">Pre-Order Meal</a>
//                     </li>
//                     <li className="dropdown">
//                       <a href="#">Customise your Meal</a>
//                     </li>
//                     <li className="dropdown">
//                       <a href="#">Drinks</a>
//                     </li>
//                     <li className="dropdown">
//                       <a href="#">Spices</a>
//                     </li>
//                     <li className="dropdown">
//                       <a href="#">Vegan Meals</a>
//                     </li>
//                     <li className="dropdown">
//                       <a href="#">Subscription Packages</a>
//                     </li>
//                   </ul>
//                 </nav>
//                 {/* <!-- /header-menu --> */}
//               </div>
//             </div>
//             {/* <!--	<div className="pull-right">
// 				<div className="search">
// 					<a href="#" className="search-open"><span className="icon icon-search"></span></a>
// 					<div className="search-dropdown">
// 						<form action="#" method="get">
// 							<div className="input-outer">
// 								<input type="search" name="search" value="" maxlength="128" placeholder="Enter keyword">
// 								<button type="submit" className="btn-search">SEARCH</button>
// 							</div>
// 							<a href="#" className="search-close"><span className="icon icon-close"></span></a>
// 						</form>
// 					</div>
// 				</div>
// 			</div> --> */}
//           </div>
//         </div>
//       </div>
//       {/* <!-- /desktop-header --> */}
//       {/* <!-- stuck nav --> */}
//       <div className="stuck-nav">
//         <div className="container">
//           <div className="pull-left">
//             <div className="stuck-menu-parent-box" />
//           </div>
//           <div className="pull-right">
//             <div className="stuck-cart-parent-box" />
//           </div>
//         </div>
//       </div>
//       {/* <!-- /stuck nav --> */}
//     </header>
//   </div>
// )
export const Header = $ => (
  <React.Fragment>
    <div>
      <header className="no-shadow">
        {/* <!-- mobile-header --> */}
        <div className="mobile-header">
          <div className="container-fluid">
            <div className="pull-left">
              {/* <!-- language --> */}
              <div className="mobile-parent-language" />
              {/* <!-- /language --> */}
              {/* <!-- currency --> */}
              <div className="mobile-parent-currency" />
              {/* <!-- /currency --> */}
              <div className="mini-menu-dropdown dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown">
                  <span className="icon icon-more_horiz" />
                </a>
                <div className="dropdown-menu">
                  <div className="mini-menu">
                    <ul>
                      <li className="active">
                        <a href="/">Home</a>
                      </li>
                      <li>
                        <a href="faqs">Need Help?</a>
                      </li>
                      <li>
                        <a href="contact">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- /mobile-header --> */}
        {/* <!-- desktop-header --> */}
        <div className="desktop-header  header-06">
          <div className="container">
            <div className="pull-left">
              {/* <!-- mini-menu --> */}
              <div className="mini-menu">
                <ul>
                  <li className="active">
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="faqs">Need Help?</a>
                  </li>
                  <li>
                    <a href="contact">Contact Us</a>
                  </li>
                </ul>
              </div>
              {/* <!-- /mini-menu --> */}
            </div>
            <div className="pull-right text-right">
              {/* <!-- box-info --> */}
              <div className="box-info">
                <div className="telephone">
                  <span className="icon icon-call" />+300-9876-2345
                </div>
                <div className="time">
                  7 Days a week from 9:00 am to 7:00 pm
                </div>
              </div>
              {/* <!-- /box-info --> */}
              {/* <!-- currency --> */}
              <div className="main-parent-currency">
                <div className="currency dropdown select-change">
                  <a href="#" className="dropdown-toggle">
                    <span className="dropdown-label hidden-sm hidden-xs">
                      Track your order
                    </span>
                  </a>
                </div>
              </div>
              {/* <!-- /currency --> */}
            </div>
          </div>

          <div className="top-line">
            <div className="container">
              {/* <!-- /search --> */}
              <div className="col-md-4 col-lg-4 pull-right" />
            </div>
          </div>
        </div>
      </header>
    </div>
  </React.Fragment>
)
