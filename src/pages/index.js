import React, { useEffect } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import timesSquareImage from "../assets/times-square1.jpg"
import atgOffice from "../assets/atg-office1.jpg"
import damonsCubicle from "../assets/damons-cubicle1.jpg"

const IndexPage = () => {

  useEffect(() => {
    window.pannellum.viewer('panorama', {
      "default": {
        "firstScene": "circle",
        "sceneFadeDuration": 1000,
        "autoLoad": true,
        "autoRotate": 2,
        "mouseZoom": false,
        // "hotSpotDebug": true
      },
      "scenes": {
        "circle": {
          "title": "ATG Office",
          "hfov": 110,
          "pitch": -3,
          "yaw": 317,
          "type": "equirectangular",
          "panorama": `${atgOffice}`,
          "hotSpots": [
            {
              "pitch": -1.3,
              "yaw": 129,
              "type": "scene",
              "text": "Click here to check out Time's Square",
              "sceneId": "timesquare",
              "cssClass": "big-arrow"
            },
            {
              "pitch": -3,
              "yaw": 330,
              "type": "scene",
              "text": "Click here to take a walk inside Damon's cubicle",
              "sceneId": "cubicle",
              "cssClass": "big-arrow"
            },
            {
              "pitch": -0.5,
              "yaw": -125,
              "type": "info",
              "text": "The office of Dost Khalique, the Director of the Academic Technologies Group.",
              "URL": "https://www.linkedin.com/in/dostkhalique"
            },
          ]
        },
        "cubicle": {
          "title": "Damon's Cubicle",
          "hfov": 110,
          "yaw": 5,
          "type": "equirectangular",
          "panorama": `${damonsCubicle}`,
          "hotSpots": [
            {
              "pitch": -10,
              "yaw": 20,
              "type": "scene",
              "text": "Click here to exit Damon's cubicle",
              "sceneId": "circle",
              "targetYaw": -20,
              "targetPitch": 2,
              "cssClass": "big-arrow"
            }
          ]
        },
        "timesquare": {
          "title": "Times Square",
          "hfov": 110,
          "yaw": 5,
          "type": "equirectangular",
          "panorama": `${timesSquareImage}`,
          "hotSpots": [
            {
              "pitch": 8,
              "yaw": -1.5,
              "type": "scene",
              "text": "Click here to visit the ATG Office",
              "sceneId": "circle",
              "targetYaw": -23,
              "targetPitch": 2,
              "cssClass": "big-arrow"
            }
          ]
        }
      }
    });
  }, [])

  return (
    <Layout>
      <section id="section__heading" className="px-8 py-8">
        <div className="heading__top">
          <h1 className="font-extrabold leading-tight max-w-3xl text-4xl mb-8">NYITCOM Academic Technologies Group 360° Office Tour</h1>
          <Link to={"/simulation-center"} className="bg-blue-500 custom__button flex rounded-sm text-center text-white w-48" >See Simulation Center 360°</Link>
        </div>
      </section>
      <section id="section__tour">
        <div id="panorama"></div>
      </section>
    </Layout>
  )
}

export default IndexPage
