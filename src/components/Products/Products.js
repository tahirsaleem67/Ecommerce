import React, { useState, useEffect } from 'react'
import { BsFillGridFill, BsListStars } from "react-icons/bs"
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { BsFillMicFill } from "react-icons/bs";
import "./product.css"
export const Products = () => {

  let [price, setPrice] = useState("200000");
  let [sortOrder, setSortOrder] = useState("");
  let [minPrice, setMinPrice] = useState(250);
  let [maxPrice, setMaxPrice] = useState(50000);

  const [inputValue, setInputValue] = useState('');
  const [activeGrid, setActiveGrid] = useState("grid");

  let handleInput = (e) => {
    setPrice(e.target.value);
  }

  function Filterclear() {
    setPrice("200000")
    setSortOrder("")
    console.log("hello")
  }


  const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();

 useEffect(() => {
  if (transcript !== '') {
    setInputValue(transcript);
  }
}, [transcript]);


  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }



  const handleSearch = (e) => {
    const { value } = e.target;
    setInputValue(value);
    resetTranscript();
    
  };

  const startListening = () => {
    setInputValue('');
    SpeechRecognition.startListening();
  };


  let data = [
    {
      title: "Shoes",
      category: "Clothe",
      img: "photo-1460353581641-37baddab0fa2.jpg",
      price: "245",
      desc: "A shoe is an item of footwear intended to protect and comfort the human foot. Though the human foot can adapt to varied terrains and climate conditions, it is vulnerable, and shoes provide protection"
    },
    {
      title: "Iphone 15",
      category: "Mobile",
      img: "iphone15ultrateaser.png",
      price: "20000",
      desc: "A shoe is an item of footwear intended to protect and comfort the human foot. Though the human foot can adapt to varied terrains and climate conditions, it is vulnerable, and shoes provide protection"
    },
    {
      title: "Laptop",
      category: "Laptop",
      img: "photo-1618424181497-157f25b6ddd5.jpg",
      price: "15700",
      desc: "A shoe is an item of footwear intended to protect and comfort the human foot. Though the human foot can adapt to varied terrains and climate conditions, it is vulnerable, and shoes provide protection"
    },
    {
      title: "Iphone 15",
      category: "Mobile",
      img: "iphone15ultrateaser.png",
      price: "4000",
      desc: "A shoe is an item of footwear intended to protect and comfort the human foot. Though the human foot can adapt to varied terrains and climate conditions, it is vulnerable, and shoes provide protection"
    },
    {
      title: "Shoes",
      category: "Clothe",
      img: "photo-1460353581641-37baddab0fa2.jpg",
      price: "50000",
      desc: "A shoe is an item of footwear intended to protect and comfort the human foot. Though the human foot can adapt to varied terrains and climate conditions, it is vulnerable, and shoes provide protection"
    },
    {
      title: "Iphone 15",
      category: "Mobile",
      img: "iphone15ultrateaser.png",
      price: "10000",
      desc: "A shoe is an item of footwear intended to protect and comfort the human foot. Though the human foot can adapt to varied terrains and climate conditions, it is vulnerable, and shoes provide protection"
    },
    {
      title: "Laptop",
      category: "Laptop",
      img: "photo-1618424181497-157f25b6ddd5.jpg",
      price: "45000",
      desc: "A shoe is an item of footwear intended to protect and comfort the human foot. Though the human foot can adapt to varied terrains and climate conditions, it is vulnerable, and shoes provide protection"
    },
    {
      title: "Iphone 15",
      category: "Mobile",
      img: "iphone15ultrateaser.png",
      price: "55000",
      desc: "A shoe is an item of footwear intended to protect and comfort the human foot. Though the human foot can adapt to varied terrains and climate conditions, it is vulnerable, and shoes provide protection"
    },
    {
      title: "Shoes",
      category: "Clothe",
      img: "photo-1460353581641-37baddab0fa2.jpg",
      price: "1100",
      desc: "A shoe is an item of footwear intended to protect and comfort the human foot. Though the human foot can adapt to varied terrains and climate conditions, it is vulnerable, and shoes provide protection"
    },
    {
      title: "Laptop",
      category: "Laptop",
      img: "photo-1618424181497-157f25b6ddd5.jpg",
      price: "8500",
      desc: "A shoe is an item of footwear intended to protect and comfort the human foot. Though the human foot can adapt to varied terrains and climate conditions, it is vulnerable, and shoes provide protection"
    },
    {
      title: "Iphone 15",
      category: "Mobile",
      img: "iphone15ultrateaser.png",
      price: "15450",
      desc: "A shoe is an item of footwear intended to protect and comfort the human foot. Though the human foot can adapt to varied terrains and climate conditions, it is vulnerable, and shoes provide protection"
    },
    {
      title: "Shoes",
      category: "Clothe",
      img: "photo-1460353581641-37baddab0fa2.jpg",
      price: "7500",
      desc: "A shoe is an item of footwear intended to protect and comfort the human foot. Though the human foot can adapt to varied terrains and climate conditions, it is vulnerable, and shoes provide protection"
    },
  ]
  if (sortOrder === "asc") {
    data.sort((a, b) => parseInt(a.price) - parseInt(b.price));
  } else if (sortOrder === "desc") {
    data.sort((a, b) => parseInt(b.price) - parseInt(a.price));
  } else {
    data.sort();
  }
  let handleMinPriceChange = (e) => {
    setMinPrice(parseInt(e.target.value));
  }

  let handleMaxPriceChange = (e) => {
    setMaxPrice(parseInt(e.target.value));
  }
  return <>
    <div className='container-fluid px-4'>
      <div className='row my-4'>
        <div className='col-lg-2 col-sm-12 px-3  mb-5 product_filter_col'>
          <div className='mb-4 v-input'>
            <input 
              value={inputValue || transcript} // Set the value of the input field to transcript or searchQuery
              onChange={handleSearch}
              type="search"
              placeholder='Search'
            />
            <button  onClick={startListening}><BsFillMicFill/></button>
          </div>
          <div className='mb-4'>
            <p className='product-heading'>Category</p>
            <p className='active'>All</p>
            <p className='active'>Mobiles</p>
            <p className='active'>Laptop</p>
            <p className='active'>Camera</p>
            <p className='active'>Watches</p>
            <p className='active'>Accessories</p>
          </div>


          <div className='mb-4'>
            <p className='product-heading'>Price Range</p>
            <div className='d-flex align-items-center'>
              <input
                type="range"
                min="250"
                max="40000"
                value={minPrice}
                onChange={handleMinPriceChange}
              />
              <span style={{ marginLeft: '10px' }}>Min: {minPrice}</span>
            </div>
            <div className='d-flex align-items-center mt-3'>
              <input
                type="range"
                min="250"
                max="50000"
                value={maxPrice}
                onChange={handleMaxPriceChange}
              />
              <span style={{ marginLeft: '10px' }}>Max: {maxPrice}</span>
            </div>
          </div>

          <button type="button" className="btn btn-danger text-uppercase" onClick={(Filterclear)}>Clear Filter</button>

        </div>

        {/* /////////////////////////////////////////////////////////////////////////////// */}



        <div className='col-lg-10 col-md-10 col-sm-10 px-3   mb-5 product_col2'>
          <div className='row'>
            <div className='col-lg-4 col-md-4 col-sm-4 d-flex gap-2 '>
              <div
                className={`grid_icon ${activeGrid === "grid" ? "active" : ""}`}
                onClick={() => setActiveGrid("grid")}
              >
                <BsFillGridFill />
              </div>
              <div
                className={`grid_icon ${activeGrid === "list" ? "active" : ""}`}
                onClick={() => setActiveGrid("list")}
              >
                <BsListStars />
              </div>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-4 ' >
              <div className='products_number d-flex justify-content-center' style={{ fontWeight: "600" }}>
                <p>12 Products</p>
              </div>
            </div>
            <div className='col-lg-4 col-sm-4 '>
              <div className='d-flex justify-content-end select'>
                <select name="" id="" onChange={(e) => setSortOrder(e.target.value)}>
                  <option value="">All</option>
                  <option value="desc">Price (Highest)</option>
                  <option value="asc">Price (Lowest)</option>
                </select>
              </div>
            </div>
          </div>




          <div className='row px-5 mt-3 pb-5'>


            {activeGrid === "grid" &&
              data.filter((product) => {
                const productPrice = parseInt(product.price);
                return (
                  productPrice >= minPrice &&
                  productPrice <= maxPrice &&
                  product.title.toLowerCase().includes(inputValue.toLowerCase())
                );
                
              })
                .map((product) => {
                  return (
                    <div className='col-lg-4 col-sm-6 my-4'>
                      <div className='product_card p-2 card'>
                        <div className='service_card_img'>
                          <img src={product.img} alt='' />
                          <div className='slide_overlay'></div>
                          <button className='service_btn'>{product.category}</button>
                        </div>
                        <div className='d-flex justify-content-between mt-3 px-2'>
                          <div>
                            <p>{product.title}</p>
                          </div>
                          <div>
                            <p className='price'>Rs. {product.price}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}

            {/* //////////////////////////////////////////////// */}
            {activeGrid === "list" &&
              data.filter((product) => {
                const productPrice = parseInt(product.price);
                return (
                  productPrice >= minPrice &&
                  productPrice <= maxPrice &&
                  product.title.toLowerCase().includes(inputValue.toLowerCase())
                );
              })
                .map((product) => {
                  return (
                    <div className='col-lg-12 col-sm-12 l-display '>
                      <div className="row mt-3 l-services  ">

                        <div className="col-lg-6 l-services-img">

                          <div className='l-service_card_img'>
                            <img src={product.img} alt='' />
                            <div className='l-slide_overlay'></div>
                            {/* <button className='service_btn'>{product.category}</button> */}
                          </div>

                        </div>
                        <div className="col-lg-6 l-service_card_d">

                          <h2>{product.title}</h2>
                          <p className='price'>Rs. {product.price}</p>
                          <p className='desc'>Rs. {product.desc}</p>
                          <button className='btn btn-primary mb-3'>Read more</button>

                        </div>
                      </div>
                    </div>
                  );
                })}
          </div>

        </div>
      </div>
    </div>
  </>
}
