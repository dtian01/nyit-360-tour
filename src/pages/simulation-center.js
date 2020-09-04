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
        "hotSpotDebug": true
      },
      "scenes": {
        "circle": {
          "title": "Simulation Center",
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
              "text": "Click here to see Simulation 3",
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
              "text": "Click here to see Simulation 2",
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
              "text": "Click here to see Simulation 1",
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
      <section id="section__heading" className="px-8 py-8">
        <div className="heading__top">
          <h1 className="font-extrabold leading-tight max-w-3xl text-4xl">NYITCOM Simulation Center 360° Tour</h1>
          <p className="max-w-sm text-sm text-gray-400">NYIT is committed to training osteopathic physicians for a lifetime of learning and practice, based upon the integration of evidence-based knowledge, critical thinking, and the tenets of osteopathic principles and practice.</p>
        </div>
        <div className="heading__bottom grid grid-cols-4 mt-8 items-center">
          <a className="underline" href="/medicine/contact">Request more information</a>
          <a className="underline" href="https://www.nyit.edu/medicine/how_to_apply">How to Apply</a>
          <a className="donate__button underline" href="https://apps2.nyit.edu/medicine/donate/">Donate to NYITCOM</a>
          <a className="bg-blue-500 px-5 py-2 rounded-sm text-white w-48 custom__button" href="https://nyit.edu/medicine">Visit NYIT's website</a>
        </div>
      </section>
      <section id="section__tour">
        <div id="panorama"></div>
      </section>
    </Layout>
  )
}

export default SimulationCenter
