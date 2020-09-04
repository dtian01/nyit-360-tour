import React, { useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import sim1 from "../assets/sim1.jpg"
import sim2 from "../assets/sim2.jpg"
import sim3 from "../assets/sim3.jpg"

const SimulationCenter = () => {

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
          "title": "Simulation Center 1",
          "hfov": 110,
          "pitch": 0,
          "yaw": 140.14051451481535,
          "type": "equirectangular",
          "panorama": `${sim1}`,
          "hotSpots": [
            {
              "pitch": 0,
              "yaw": 158.33526604303532,
              "type": "scene",
              "text": "Click here to see Simulation Center 3",
              "sceneId": "sim3",
              "cssClass": "big-arrow"
            }
          ]
        },
        "sim3": {
          "title": "Sim 3",
          "hfov": 110,
          "pitch": 0,
          "yaw": 0.14051451481535,
          "type": "equirectangular",
          "panorama": `${sim3}`,
          "hotSpots": [
            {
              "pitch": 0,
              "yaw": 2.0960060000186784,
              "type": "scene",
              "text": "Click here to see Simulation Center 2",
              "sceneId": "sim2",
              "cssClass": "big-arrow"
            }
          ]
        },
        "sim2": {
          "title": "Sim 2",
          "hfov": 110,
          "pitch": 0,
          "yaw": 103.14051451481535,
          "type": "equirectangular",
          "panorama": `${sim2}`,
          "hotSpots": [
            {
              "pitch": 0,
              "yaw": -84.20656396655201,
              "type": "scene",
              "text": "Click here to see Simulation Center 1",
              "sceneId": "circle",
              "cssClass": "big-arrow"
            }
          ]
        },
      }
    });
  }, [])

  return (
    <Layout>
      <section id="section__heading" className="p-8">
        <div className="heading__top">
          <h1 className="font-extrabold leading-tight max-w-3xl text-4xl mb-6">NYITCOM Simulation Center 360° Tour</h1>
          <Link to={"/"} className="bg-black border-2 border-gray-400 custom__button inline-block p-2 rounded-sm text-center text-white" >See ATG Office in 360°</Link>
        </div>
      </section>
      <section id="section__tour">
        <div id="panorama"></div>
      </section>
    </Layout>
  )
}

export default SimulationCenter
