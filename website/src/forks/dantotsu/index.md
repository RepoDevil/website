---
title: Dantotsu
titleTemplate: false
description: Saikou clone with a touch of Aniyomi

layout: home
pageClass: page-dantotsu

hero:
  name: Dantotsu
  tagline: Saikou clone with a touch of Aniyomi
  image: /forks/logo-dantotsu.webp
  actions:
    - theme: brand
      text: Download
      link: https://github.com/rebelonion/dantotsu/releases/latest
    - theme: alt
      text: GitHub
      link: https://github.com/rebelonion/dantotsu

customMetaTitle: Dantotsu

features:
  - title: Streaming
    details: Watch anime and read manga and light novels (Ad-Free)
    icon: 👑
  - title: A Big Community
    details: A large community equals many ideas
    icon: 👪
  - title: The "Upstream" Project
    details: Himitsu is a fork of Dantotsu
    icon: 🔖

theme: "#0952AF"
image: /forks/logo-dantotsu.webp
imageSize: small
---

<br><VPTeamMembers size="small" :members="members" />

<script setup>
import "@theme/styles/forks/dantotsu.styl"
import { VPTeamMembers } from "vitepress/theme"

const members = [
  {
    avatar: "https://www.github.com/rebelonion.png",
    name: "rebelonion",
    title: "Maintainer",
    links: [
      { icon: "github", link: "https://github.com/rebelonion" }
    ]
  }
]
</script>
