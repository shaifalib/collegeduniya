/** @format */

import React, { Component } from 'react';

/*import './Data';*/

import './collegeList.css';

class CollegeList extends Component {
  render() {
    const {data} = this.props;
    return (
      <div className='list-row--item'>
        <div className='college-image relative'>
          <div className='flag absolute text-center'>
            {
              data.promoted ?
                <p className='uppercase flagText textWhite'>promoted</p>
                : null
            }
          </div>
          <div className='flex flexEnd'>
            <div className='rating zIndexOne text-center'>
              <p className='textWhite'>
                {data.rating}<span className='textWhite'>/5</span>
              </p>
              <span className='captialize textWhite'>{data.rating_remarks}</span>
            </div>
          </div>
          <div className='college-keyPoints absolute flex spaceBetween alignCenter'>
            <div className='pills flex zIndexOne'>
              <span>{data.tags[0]}</span>
              <span>{data.tags[1]}</span>
            </div>
            <p className='textWhite description zIndexOne'>
              {data.ranking}
            </p>
          </div>
        </div>
        <div className='about-college flex spaceBetween relative'>
          <div>
            <div className='flex '>
              <h2 className='college-name'>{data.college_name}</h2>
              <div>
                <span className='fa fa-star checked'></span>
                <span className='fa fa-star checked'></span>
                <span className='fa fa-star checked'></span>
                <span className='fa fa-star'></span>
                <span className='fa fa-star'></span>
              </div>
            </div>
            <p className='location'>
              {data.nearest_place[0]}{' '}
              <span>| {data.nearest_place[1]}</span>
            </p>
            <p className='location--nearPoint'>
              <span>93% Match :</span> <span>{data.famous_nearest_places} </span>
            </p>
          </div>
          <div className='text-right'>
            <div className='original-price flex flexEnd'>
              <strike>{data.original_fees}</strike>
              <span className='textWhite relative'>{data.discount}</span>
            </div>
            <div className='discount-price'>
              <p>₹{data.discounted_fees}</p>
              <span>{data.fees_cycle}</span>
            </div>
          </div>
          <div className="absolute flex spaceBetween aminties alignCenter">
            <p> {data.offertext}</p>
            <div className="flex more-aminties ">
              <span>{data.amenties[0]}</span>
              <span>{data.amenties[1]}</span>
            </div>
          </div>
        </div>
      </div>
      // <div className="list-row--item">
      //     <div className="college-image relative">
      //         <div className="flag absolute text-center">
      //             <p className="uppercase flagText textWhite">promoted</p>
      //         </div>
      //         <div className="flex flexEnd">
      //             <div className="rating zIndexOne text-center">
      //                 <p className="textWhite">3.9<span className="textWhite">/5</span></p>
      //                 <span className="captialize textWhite">Very Good</span>
      //             </div>
      //         </div>
      //         <div className="college-keyPoints absolute flex spaceBetween alignCenter">
      //             <div className="pills flex zIndexOne">
      //                 <span>Best college 2018</span>
      //                 <span>2kms away</span>
      //             </div>
      //             <p className="textWhite description zIndexOne">#7 in 260 colleges in north
      //                 campus</p>
      //         </div>
      //     </div>
      //     <div className="about-college flex spaceBetween">
      //         <div>
      //             <div className="flex ">
      //                 <h2 className="college-name">Hansraj College Delhi University</h2>
      //                 <div>
      //                     <span className="fa fa-star checked"></span>
      //                     <span className="fa fa-star checked"></span>
      //                     <span className="fa fa-star checked"></span>
      //                     <span className="fa fa-star"></span>
      //                     <span className="fa fa-star"></span>
      //                 </div>
      //             </div>
      //             <p className="location">Near Vishwavidyalya Metro Station <span>| 2 Kms away from bus stand</span>
      //             </p>
      //             <p className="location--nearPoint"><span>93% Match :</span> <span>2.5kms</span> from GTB Nagar, <span>7 Kms</span> from Rajiv Chowk</p>
      //         </div>
      //         <div className="text-right">
      //             <div className="original-price flex flexEnd">
      //                 <strike>6,8756</strike>
      //                 <span className="textWhite relative">20</span>
      //             </div>
      //             <div className="discount-price">
      //                 <p>₹5,768</p>
      //                 <span>Per Semester (3months)</span>
      //             </div>
      //         </div>
      //     </div>
      // </div>
    );
  }
}

export default CollegeList;
