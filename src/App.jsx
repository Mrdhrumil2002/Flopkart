/** @format */

import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Button, Nav, Dropdown, DropdownButton } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import "./App.css";

function App() {
  return (
    <div>
      <header>
        <Nav className=' navbar-fixed-top bg-primary'>
          <Container className=' justify-content-center '>
            <Navbar.Brand
              className='d-flex flex-row align-items-center nav-bar  justify-content-around'
              href='#home'>
              <div className='d-flex flex-row align-items-center  nav-site-logo'>
                <img
                  src='https://i.ibb.co/2c5YjjL/image-removebg-preview.png'
                  height='45'
                  className='d-inline-block '
                />

                {/*        Search button        */}
                <input
                  type='search'
                  className='form-control rounded-0 rounded-start shadow  nav-search-box'
                  id='search-box'
                  placeholder='Search for products, brands and more'
                />
                <Button className='bg-white border-0 rounded-0  rounded-end nav-search-button'>
                  <img src='https://i.ibb.co/X7tgZbj/search-1.png' height='18' alt='search-1' />
                </Button>
              </div>

              {/*        Dropdown Menu       */}

              <div className='nav-dropdown-group d-flex flex-row'>
                <div className='dropdown '>
                  <style>
                    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap');
                  </style>
                  <button
                    className='btn btn-lg btn-primary dropdown-toggle nav-dropdown align-items-center'
                    type='button'
                    id='dropdownMenuButton1'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'>
                    Dhrumil
                  </button>
                  <ul className='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
                    <li>
                      <a className='dropdown-item' href='#'>
                        Action
                      </a>
                    </li>
                    <li>
                      <a class='dropdown-item' href='#'>
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item' href='#'>
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='dropdown'>
                  <button
                    className='btn btn-lg btn-primary dropdown-toggle nav-dropdown align-items-center '
                    type='button'
                    id='dropdownMenuButton1'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'>
                    More
                  </button>
                  <ul className='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
                    <li>
                      <a className='dropdown-item' href='#'>
                        Action
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item' href='#'>
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item' href='#'>
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
                <button
                  type='button'
                  className='btn btn-lg btn-primary nav-dropdown align-items-center'>
                  <img
                    id='nav-cart-logo'
                    src='https://i.ibb.co/px7bC4f/cart-28-48.png'
                    alt='search-1'
                  />
                  Cart
                </button>
              </div>
            </Navbar.Brand>
          </Container>
        </Nav>

        {/*        Sub-Navigation-Bar        */}

        <div class='d-flex flex-row bd-highlight mb-3 justify-content-around'>
          <div class='p-2 bd-highlight'>
            <Dropdown>
              <Dropdown.Toggle
                variant='white'
                id='dropdown-basic'
                className='d-flex flex-row align-items-center justify-content-around'>
                <h3>Electronics</h3>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
                <Dropdown.Item href='#/action-2'>Another action</Dropdown.Item>
                <Dropdown.Item href='#/action-3'>Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div class='p-2 bd-highlight'>
            <Dropdown>
              <Dropdown.Toggle
                variant='white'
                id='dropdown-basic'
                className='d-flex flex-row align-items-center justify-content-around'>
                <h3>TVs & Appliances</h3>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
                <Dropdown.Item href='#/action-2'>Another action</Dropdown.Item>
                <Dropdown.Item href='#/action-3'>Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div class='p-2 bd-highlight'>
            <Dropdown>
              <Dropdown.Toggle
                variant='white'
                id='dropdown-basic'
                className='d-flex flex-row align-items-center justify-content-around'>
                <h3>Men</h3>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
                <Dropdown.Item href='#/action-2'>Another action</Dropdown.Item>
                <Dropdown.Item href='#/action-3'>Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div class='p-2 bd-highlight'>
            <Dropdown>
              <Dropdown.Toggle
                variant='white'
                id='dropdown-basic'
                className='d-flex flex-row align-items-center justify-content-around'>
                <h3>Women</h3>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
                <Dropdown.Item href='#/action-2'>Another action</Dropdown.Item>
                <Dropdown.Item href='#/action-3'>Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div class='p-2 bd-highlight'>
            <Dropdown>
              <Dropdown.Toggle
                variant='white'
                id='dropdown-basic'
                className='d-flex flex-row align-items-center justify-content-around'>
                <h3>Baby & Kids</h3>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
                <Dropdown.Item href='#/action-2'>Another action</Dropdown.Item>
                <Dropdown.Item href='#/action-3'>Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div class='p-2 bd-highlight'>
            <Dropdown>
              <Dropdown.Toggle
                variant='white'
                id='dropdown-basic'
                className='d-flex flex-row align-items-center justify-content-around'>
                <h3>Home & Furniture</h3>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
                <Dropdown.Item href='#/action-2'>Another action</Dropdown.Item>
                <Dropdown.Item href='#/action-3'>Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div class='p-2 bd-highlight'>
            <Dropdown>
              <Dropdown.Toggle
                variant='white'
                id='dropdown-basic'
                className='d-flex flex-row align-items-center justify-content-around'>
                <h3>Sports, Books & More</h3>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
                <Dropdown.Item href='#/action-2'>Another action</Dropdown.Item>
                <Dropdown.Item href='#/action-3'>Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div class='p-2 bd-highlight'>
            <Dropdown>
              <Dropdown.Toggle
                variant='white'
                id='dropdown-basic'
                className='d-flex flex-row align-items-center justify-content-around'>
                <h3>Flights</h3>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
                <Dropdown.Item href='#/action-2'>Another action</Dropdown.Item>
                <Dropdown.Item href='#/action-3'>Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div class='p-2 bd-highlight'>
            <Dropdown>
              <Dropdown.Toggle
                variant='white'
                id='dropdown-basic'
                className='d-flex flex-row align-items-center justify-content-around'>
                <h3>Offer Zone</h3>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
                <Dropdown.Item href='#/action-2'>Another action</Dropdown.Item>
                <Dropdown.Item href='#/action-3'>Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div class='p-2 bd-highlight'>
            <Dropdown>
              <Dropdown.Toggle
                variant='white'
                id='dropdown-basic'
                className='d-flex flex-row align-items-center justify-content-around'>
                <h3>Grocerry</h3>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
                <Dropdown.Item href='#/action-2'>Another action</Dropdown.Item>
                <Dropdown.Item href='#/action-3'>Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <header />
        <br />
        <br />
        <br />
      </header>

      <body>
        <h2> Big Bachat Dhamaal </h2>

        {/*               Anupama Shoping jpgsss              */}

        <div className='align-items-center bbd-body'>
          <div className=' d-flex justify-content-center'>
            <img
              src='https://i.ibb.co/Sn3BSrz/Anupama-up-face.jpg'
              alt='Anupama-up-face'
              className=' d-flex justify-content-center bbd-body-img'
              border='0'
            />
          </div>
          <div className=' d-flex justify-content-center'>
            <img
              src='https://i.ibb.co/KGm2ywy/Anupama-mid-face.jpg'
              alt='Anupama-mid-face'
              className='bbd-body-img'
              border='0'
            />
          </div>
          <div className=' d-flex justify-content-center'>
            <img
              src='https://i.ibb.co/pxFn6vs/Anupama-low-face.jpg'
              alt='Anupama-low-face'
              className='bbd-body-img'
              border='0'
            />
          </div>
          <div>
            <img
              src='https://i.ibb.co/47m0M8W/best-budget-header.jpg'
              alt='best-budget-header'
              className='bbd-body-img'
              border='0'
            />
          </div>
        </div>
        <br />

        {/*                     Price Slidee listtt              */}

        <div className='d-flex flex-row align-items-center nav-bar  justify-content-around bbd-body-price-slide'>
          <Button className=' p-0 border-0  '>
            <img
              className=' bbd-body-price-slide-items'
              src='https://i.ibb.co/Tm7S3Rs/Under-499.jpg'
              alt='Under-499'
              border='0'
            />
          </Button>

          <Button className='p-0 border-0 s'>
            <img
              src='https://i.ibb.co/kSvzmDQ/Under-699.jpg'
              className=' bbd-body-price-slide-items'
              alt='Under-699'
              border='0'
            />
          </Button>
          <Button className=' p-0 border-0'>
            <img
              src='https://i.ibb.co/KGYD8Q3/Under-799.jpg'
              className=' bbd-body-price-slide-items'
              alt='Under-799'
              border='0'
            />
          </Button>
          <Button className=' p-0 border-0 '>
            <img
              src='https://i.ibb.co/pvbh24J/Under-999.jpg'
              alt='Under-999'
              className=' bbd-body-price-slide-items'
              border='0'
            />
          </Button>
        </div>

        <div>
          <img
            src='https://i.ibb.co/58dBcyc/a05a38a4e8816af3.webp'
            alt='a05a38a4e8816af3'
            className='bbd-body-img'
            border='0'
          />
        </div>

        {/*                Small Shop flopkart              */}
        <div>
          <div className='d-flex flex-row align-items-center justify-content-around'>
            <img
              src='https://i.ibb.co/XSnFhGC/blue-store-up.webp'
              alt='blue-store-up'
              className='bbd-body-img '
              border='0'
            />
          </div>
          <div className='d-flex flex-row align-items-center justify-content-around bbd-body-price-slide'>
            <Button className=' rounded-0 border-0  '>
              <img
                src='https://i.ibb.co/jR1N5YQ/blue-1-item-1.webp'
                alt='blue-1-item-1'
                border='0'
                className=' bbd-body-price-slide-items'
              />
            </Button>
            <Button className='rounded-0 border-0 s'>
              <img
                src='https://i.ibb.co/Gk9CT6b/blue-1-item-2.webp'
                alt='blue-1-item-2'
                border='0'
                className=' bbd-body-price-slide-items'
              />
            </Button>
            <Button className='rounded-0 border-0'>
              <img
                src='https://i.ibb.co/PNCkdn0/blue-1-item-3.webp'
                alt='blue-1-item-3'
                border='0'
                className=' bbd-body-price-slide-items'
              />
            </Button>
            <Button className='rounded-0 border-0 '>
              <img
                src='https://i.ibb.co/cgWkcJp/blue-1-item-4.webp'
                alt='blue-1-item-4'
                border='0'
                className='  bbd-body-price-slide-items'
              />
            </Button>
          </div>
          <div className=' d-flex align-items-center justify-content-center'>
            <img
              src='https://i.ibb.co/rGG0Nnd/blue-store-down.webp'
              alt='blue-store-down'
              className=' bbd-small-store-down '
              border='0'
            />
          </div>
        </div>

        {/*                 Pink store               */}

        <div>
          <div className='d-flex flex-row align-items-center justify-content-around'>
            <img
              src='https://i.ibb.co/kHCVVBc/pink-store-up-2.webp'
              alt='pink-store-up-2'
              className='bbd-body-img '
              border='0'
            />
          </div>
          <div className='d-flex flex-row align-items-center justify-content-around bbd-body-price-slide'>
            <Button className='p-0 bbd-store-pink rounded-0 border-0  '>
              <img
                src='https://i.ibb.co/wNCQqNz/pink-2-item-1.webp'
                alt='pink-2-item-1'
                border='0'
                className='bbd-body-price-slide-items'
              />
            </Button>
            <Button className=' p-0  bbd-store-pink rounded-0 border-0 s'>
              <img
                src='https://i.ibb.co/CnHX0L9/pink-2-item-2.webp'
                alt='pink-2-item-2'
                border='0'
                className=' bbd-body-price-slide-items'
              />
            </Button>
            <Button className='p-0 bbd-store-pink rounded-0 border-0'>
              <img
                src='https://i.ibb.co/XWcxzbk/pink-2-item-3.webp'
                alt='pink-2-item-3'
                border='0'
                className=' bbd-body-price-slide-items'
              />
            </Button>
            <Button className=' p-0 bbd-store-pink rounded-0 border-0 '>
              <img
                src='https://i.ibb.co/g9pw9Hz/pink-2-item-4.webp'
                alt='pink-2-item-4'
                border='0'
                className='  bbd-body-price-slide-items'
              />
            </Button>
          </div>
          <div className='d-flex align-items-center justify-content-center'>
            <img
              src='https://i.ibb.co/nQrrrs0/pink-store-down.webp'
              alt='pink-store-down'
              className=' bbd-small-store-down '
              border='0'
            />
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
