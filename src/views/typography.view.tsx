import React from 'react'
import Button from '../components/ui/button.ui'
import SvgIcon from '../components/ui/svg_icon.ui'
import Imports from '../assets/assets.imports'

const Typography:React.FC<any> = () => {
  return (
    <React.Fragment>

      <div className="container">
        <br />
        <h1>Miscellaneous</h1>
        <hr />
        <div className="row  bg-primary py-2">
          <div className="col-3">
            <Button
              theme='white'
              rounded
              noShadow
              icon={{src : Imports.icons.logo_icon, size : 20}}
            >
              <img src={Imports.images.logo} alt="Fullfily" />
            </Button>
          </div>
          <div className="col-3">
          <Button 
              theme='white'
              rounded
              children = "Bangalore"
              noShadow
            />
          </div>
          <div className="col-3">
          <Button 
              theme='white'
              rounded
              noShadow
              icon={{src: Imports.icons.cart_icon}}
              iconMode
            />
          </div>
        </div>
        <br />
        <h1>Headings </h1>
        <hr />
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
        <br />
        <h1>Text</h1>
        <hr />
        <div className="row">
          <p className="col-12 text-primary ">text-primary</p>
          <p className="col-12 text-secondary ">text-secondary</p>
          <p className="col-12 text-info ">text-info</p>
          <p className="col-12 text-danger ">text-danger</p>
          <p className="col-12 text-warning ">text-warning</p>
          <p className="col-12 text-success ">text-success</p>
          <p className="col-12 text-muted ">text-muted</p>
          <p className="col-12 text-dark ">text-dark</p>
          <p className="col-12 text-semi-bold ">text-semi-bold</p>
          <p className="col-12 text-medium-bold ">text-medium-bold</p>
          <p className="col-12 text-bold ">text-bold</p>
        </div>

        <div className="row">
          <div className="col-12">
            <br />
            <h1>Backgrounds</h1>
            <hr />
          </div>
          <div className="col-2">
            <div className="color-palettes bg-primary"></div>
            <p>primary</p>
          </div>
          <div className="col-2">
            <div className="color-palettes bg-secondary"></div>
            <p>secondary</p>
          </div>
          <div className="col-2">
            <div className="color-palettes bg-info"></div>
            <p>info</p>
          </div>
          <div className="col-2">
            <div className="color-palettes bg-danger"></div>
            <p>danger</p>
          </div>
          <div className="col-2">
            <div className="color-palettes bg-warning"></div>
            <p>warning</p>
          </div>
          <div className="col-2">
            <div className="color-palettes bg-success"></div>
            <p>success</p>
          </div>
          <div className="col-2">
            <div className="color-palettes bg-muted"></div>
            <p>muted</p>
          </div>
          <div className="col-2">
            <div className="color-palettes bg-linear-transparent-purple"></div>
            <p>linear-transparent-purple</p>
          </div>
          <div className="col-2">
            <div className="color-palettes bg-light-purple"></div>
            <p>light-purple</p>
          </div>
          <div className="col-2">
            <div className="color-palettes bg-light-purple-background"></div>
            <p>light-purple-background</p>
          </div>
          <div className="col-2">
            <div className="color-palettes bg-yellow"></div>
            <p>yellow</p>
          </div>
          <div className="col-2">
            <div className="color-palettes bg-green"></div>
            <p>green</p>
          </div>
          <div className="col-2">
            <div className="color-palettes bg-orange"></div>
            <p>orange</p>
          </div>
          <div className="col-2">
            <div className="color-palettes bg-sky-blue-dark"></div>
            <p>sky-blue-dark</p>
          </div>
          <div className="col-2">
            <div className="color-palettes bg-sky-blue"></div>
            <p>sky-blue</p>
          </div>
          <div className="col-2">
            <div className="color-palettes bg-dark-blue"></div>
            <p>dark-blue</p>
          </div>
          <div className="col-2">
            <div className="color-palettes bg-dark-green"></div>
            <p>dark-green</p>
          </div>
          <div className="col-2">
            <div className="color-palettes bg-yellow-gradient"></div>
            <p>yellow-gradient</p>
          </div>
          <div className="col-2">
            <div className="color-palettes bg-orange-gradient"></div>
            <p>orange-gradient</p>
          </div>
          <div className="col-2">
            <div className="color-palettes bg-gray-gradient"></div>
            <p>gray-gradient</p>
          </div>
        </div>
        <br />
        <h1>Buttons</h1>
        <hr />
        <div className="row ">
          <div className="col-2">
            <Button
              theme='white'
              children='Button White'
            />
          </div>
          <div className="col-2">
            <Button
              theme='primary'
              children='Button Primary'
            />
          </div>
          <div className="col-2">
            <Button
              theme='dark'
              children='Button Dark'
            />
          </div>
          <div className="col-2">
            <Button
              theme='warning'
              children='Button Warning'
            />
          </div>
        </div>

      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />



    </React.Fragment>
  )
}

export default Typography