import React, { useEffect } from "react"
import Layout from "../components/layout"

const IndexPage = () => {

  useEffect(() => {
    window.pannellum.viewer('panorama', {
      "default": {
        "firstScene": "circle",
        "sceneFadeDuration": 1000,
        "autoLoad": true,
        "autoRotate": 2,
        "mouseZoom": false
      },

      "scenes": {
        "circle": {
          "title": "ATG Office",
          "hfov": 110,
          "pitch": -3,
          "yaw": 317,
          "type": "equirectangular",
          "panorama": "https://raw.githubusercontent.com/dtian01/dtian01.github.io/master/assets/2.jpg",
          "hotSpots": [
            {
              "pitch": -1.3,
              "yaw": 129,
              "type": "scene",
              "text": "Click here to go to Time's Square",
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
            }
          ]
        },
        "cubicle": {
          "title": "Damon's Cubicle",
          "hfov": 110,
          "yaw": 5,
          "type": "equirectangular",
          "panorama": "https://raw.githubusercontent.com/dtian01/dtian01.github.io/master/assets/1.jpg",
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
          "panorama": "https://i.postimg.cc/WbzRFvym/2-D-Times-Square.jpg",
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
          <h1 className="font-extrabold leading-tight max-w-3xl text-4xl">NYIT College of Osteopathic Medicine Campus 360° Tour</h1>
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

export default IndexPage
