---
title: Awery
titleTemplate: false
description: Anilist client based on Dantotsu which is based on Saikou

layout: home
pageClass: page-awery

hero:
  name: Awery
  tagline: Imagine the perfect app where you can customize everything, with tons of content and a stylish look. It's all about Awery!
  image: /forks/logo-awery.webp
  actions:
    - theme: brand
      text: Download
      link: https://github.com/MrBoomDeveloper/Awery/releases/latest/
    - theme: alt
      text: GitHub
      link: https://github.com/MrBoomDeveloper/Awery

customMetaTitle: Awery

features:
  - title: Tags
    details: Filter out tags like mecha from the whole app!
    icon: 🏷️
  - title: Blacklist
    details: Blacklist unwanted media
    icon: 🚫
  - title: Style
    details: Best design among other anime apps
    icon: 🖌️

theme: "#CE2828"
image: /forks/logo-awery.webp
imageSize: small
---

<br><VPTeamMembers size="small" :members="members" />

<script setup>
import "@theme/styles/forks/awery.styl"
import { VPTeamMembers } from "vitepress/theme"

const members = [
  {
    avatar: "https://www.github.com/MrBoomDeveloper.png",
    name: "MrBoomDeveloper",
    title: "Creator",
    links: [
      { icon: "github", link: "https://github.com/MrBoomDeveloper" }
    ]
  }
]
</script>
