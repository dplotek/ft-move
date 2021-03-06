const body = document.querySelector("body")

let postersUtils = [
  {
    id: "naomi_osaka",
    name: "Naomi Osaka",
    src: "images/posters/Poster-Naomi_Osaka.webp",
    category: "posters",
    behance: "https://www.behance.net/gallery/145629313/Project-sport",
    instagram: "https://www.instagram.com/p/Cdayw_Zqfdb/",
    pinterest: "https://pl.pinterest.com/pin/603834262552051554/",
  },
  {
    id: "klay_thompson",
    name: "Klay Thompson",
    src: "images/posters/poster-klay_thopmson.webp",
    category: "posters",
    behance: "https://www.behance.net/gallery/145629313/Project-sport",
    instagram: "https://www.instagram.com/p/CddcNhPKbNE/",
    pinterest: "https://pl.pinterest.com/pin/603834262552079060/",
  },
  {
    id: "michael_jordan",
    name: "Michael Jordan",
    category: "posters",
    src: "images/posters/Poster-Michael_Jordan.webp",
    behance: "https://www.behance.net/gallery/145629313/Project-sport",
    instagram: "https://www.instagram.com/p/CdkzupMKS3e/",
    pinterest: "https://pl.pinterest.com/pin/603834262552220092/",
  },
  {
    id: "conor_mcgregor",
    name: "Conor McGregor",
    category: "posters",
    src: "images/posters/Poster-Conor_Mcgregor.webp",
    behance: "https://www.behance.net/gallery/145629313/Project-sport",
    instagram: "https://www.instagram.com/p/CdgEHuNK9SC/",
    pinterest: "https://pl.pinterest.com/pin/603834262552122473/",
  },
  {
    id: "michal_masny",
    name: "Michal Masny",
    category: "posters",
    src: "images/posters/Poster-Michal_Masny.webp",
    behance: "https://www.behance.net/gallery/145629313/Project-sport",
    instagram: "https://www.instagram.com/p/CdWRSgzKeZR/",
    pinterest: "https://pl.pinterest.com/pin/603834262552051646/",
  },
  {
    id: "zaksa",
    name: "ZAKSA Kędzierzyn-Koźle",
    category: "posters",
    src: "images/posters/Poster-Zaksa.webp",
    behance: "https://www.behance.net/gallery/145629313/Project-sport",
    instagram: "https://www.instagram.com/p/Cd8apHVDm6s/",
    pinterest: "https://pl.pinterest.com/pin/603834262552570546/",
  },
  {
    id: "facundo_conte",
    name: "Facundo Conte",
    category: "posters",
    src: "images/posters/Poster-Facundo_Conte.webp",
    instagram: "https://www.instagram.com/p/CdYRJlCqVlJ/",
    pinterest: "https://pl.pinterest.com/pin/603834262552051616/",
  },
  {
    id: "zizou",
    name: "Zinédine Zidane",
    category: "posters",
    src: "images/posters/Poster-Zidane.webp",
    behance: "https://www.behance.net/gallery/145629313/Project-sport",
    instagram: "https://www.instagram.com/p/CdiY2syKiQX/",
    pinterest: "https://pl.pinterest.com/pin/603834262552220078/",
  },
  {
    id: "golden_state",
    name: "Golden State",
    category: "posters",
    src: "images/posters/Poster-Golden_State.webp",
    behance: "https://www.behance.net/gallery/145629313/Project-sport",
    instagram: "https://www.instagram.com/p/Cdnm3yqqB5p/",
    pinterest: "https://pl.pinterest.com/pin/603834262552220101/",
  },
  {
    id: "greek_freak",
    name: "Giannis Antetokounmpo",
    category: "posters",
    src: "images/posters/Poster-Greek-Freak.webp",
    behance: "https://www.behance.net/gallery/145629313/Project-sport",
    instagram: "https://www.instagram.com/p/CdqJ1dUKneu/",
    pinterest: "https://pl.pinterest.com/pin/603834262552220119/",
  },
  {
    id: "michal_kubiak",
    name: "Michał Kubiak",
    category: "posters",
    src: "images/posters/Poster-Kubiak.webp",
    pinterest: "https://pl.pinterest.com/pin/603834262553539556/",
    intagram: "https://www.instagram.com/p/CfE6qT-Dvrw/"
  },
  {
    id: "dominik_jaglarski",
    name: "Dominik Jaglarski",
    category: "posters",
    src: "images/posters/Poster-Jaglar.webp",
    instagram: "https://www.instagram.com/p/CdvJJT_q-aX/"
  },
  {
    id: "billboard1",
    name: "Projekt bilboardu klubowego",
    category: "branding",
    src: "images/branding/projekt_bilboardu_klubowego.webp"
  },
  {
    id: "mw-logo",
    name: "Logo na siatce",
    category: "branding",
    src: "images/branding/logo_na_siatce.webp"
  },
  {
    id: "stickers",
    name: "Wlepki klubowe",
    category: "branding",
    src: "images/branding/wlepki_klubowe.webp"
  },
  {
    id: "brief-case",
    name: "Teczki klubowe",
    category: "branding",
    src: "images/branding/teczki_klubowe.webp"
  },
  {
    id: "pins",
    name: "Przypinki klubowe",
    category: "branding",
    src: "images/branding/przypinki_klubowe.webp"
  },
  {
    id: "t-shirts",
    name: "Projekt strojów klubowych",
    category: "branding",
    src: "images/branding/projekt_strojow_klubowych.webp"
  },
  {
    id: "mw-billboard",
    name: "Klubowy herb na materiale",
    category: "branding",
    src: "images/branding/klubowy_herb_na_materiale.webp"
  },
  {
    id: "face-mask",
    name: "Maseczka klubowa",
    category: "branding",
    src: "images/branding/maseczka_klubowe.webp"
  },
  {
    id: "social1",
    name: "Posty instagramowe",
    category: "socials",
    src: "images/socials/socials-1.webp"
  },
  {
    id: "social2",
    name: "Posty instagramowe",
    category: "socials",
    src: "images/socials/socials-2.webp"
  }
  ,
  {
    id: "social3",
    name: "Posty instagramowe",
    category: "socials",
    src: "images/socials/socials-3.webp"
  },
  {
    id: "mos-1",
    name: 'Oferta sponsorska "Mos Wola Warszawa"',
    category: "sponsorship",
    src: "images/sponsorship offers/mos-wola-warszawa-1.webp"
  },
  {
    id: "mos-2",
    name: 'Oferta sponsorska "Mos Wola Warszawa"',
    category: "sponsorship",
    src: "images/sponsorship offers/mos-wola-warszawa-2.webp"
  },
  {
    id: "mos-3",
    name: 'Oferta sponsorska "Mos Wola Warszawa"',
    category: "sponsorship",
    src: "images/sponsorship offers/mos-wola-warszawa-3.webp"
  },
  {
    id: "mos-4",
    name: 'Oferta sponsorska "Mos Wola Warszawa"',
    category: "sponsorship",
    src: "images/sponsorship offers/mos-wola-warszawa-4.webp"
  },
  {
    id: "mos-5",
    name: 'Oferta sponsorska "Mos Wola Warszawa"',
    category: "sponsorship",
    src: "images/sponsorship offers/mos-wola-warszawa-5.webp"
  },
  {
    id: "mos-6",
    name: 'Oferta sponsorska "Mos Wola Warszawa"',
    category: "sponsorship",
    src: "images/sponsorship offers/mos-wola-warszawa-6.webp"
  },
  {
    id: "panki-1",
    name: 'Oferta sponsorska "SPS Panki"',
    category: "sponsorship",
    src: "images/sponsorship offers/sps-panki-1.webp"
  },
  {
    id: "panki-2",
    name: 'Oferta sponsorska "SPS Panki"',
    category: "sponsorship",
    src: "images/sponsorship offers/sps-panki-2.webp"
  },
  {
    id: "panki-3",
    name: 'Oferta sponsorska "SPS Panki"',
    category: "sponsorship",
    src: "images/sponsorship offers/sps-panki-3.webp"
  },
  {
    id: "panki-4",
    name: 'Oferta sponsorska "SPS Panki"',
    category: "sponsorship",
    src: "images/sponsorship offers/sps-panki-4.webp"
  },
  {
    id: "panki-5",
    name: 'Oferta sponsorska "SPS Panki"',
    category: "sponsorship",
    src: "images/sponsorship offers/sps-panki-5.webp"
  },
  {
    id: "panki-6",
    name: 'Oferta sponsorska "SPS Panki"',
    category: "sponsorship",
    src: "images/sponsorship offers/sps-panki-6.webp"
  },
  {
    id: "witkos-1",
    name: 'Oferta sponsorska "Głowacki/Witkoś"',
    category: "sponsorship",
    src: "images/sponsorship offers/glowacki-witkos-1.webp"
  },
  {
    id: "witkos-2",
    name: 'Oferta sponsorska "Głowacki/Witkoś"',
    category: "sponsorship",
    src: "images/sponsorship offers/glowacki-witkos-2.webp"
  },
  {
    id: "witkos-3",
    name: 'Oferta sponsorska "Głowacki/Witkoś"',
    category: "sponsorship",
    src: "images/sponsorship offers/glowacki-witkos-3.webp"
  },
  {
    id: "witkos-4",
    name: 'Oferta sponsorska "Głowacki/Witkoś"',
    category: "sponsorship",
    src: "images/sponsorship offers/glowacki-witkos-4.webp"
  },
  {
    id: "witkos-5",
    name: 'Oferta sponsorska "Głowacki/Witkoś"',
    category: "sponsorship",
    src: "images/sponsorship offers/glowacki-witkos-5.webp"
  },
  {
    id: "witkos-6",
    name: 'Oferta sponsorska "Głowacki/Witkoś"',
    category: "sponsorship",
    src: "images/sponsorship offers/glowacki-witkos-6.webp"
  }
]

const allImages = [...document.querySelectorAll('[data-name*=gallery]')]

let currentImgIndex
let galleryLength

const createPopup = () => {
  //popup
  const popup = document.createElement("div")
  popup.classList.add("fixed", "top-0", "left-0", "w-screen", "h-screen", "bg-black/[0.6]", "flex", "items-center", "justify-center", "z-[100]", "p-10")
  body.appendChild(popup)

  //wrapper
  const wrapper = document.createElement("div")
  wrapper.classList.add("h-5/6", "relative")
  popup.appendChild(wrapper)

  //container
  const container = document.createElement("div")
  container.classList.add("relative", "h-full", "flex", "justify-center", "flex-col", "flex-end", "max-w-[850px]")
  wrapper.appendChild(container)

  const closeButtonContainer = document.createElement("div")
  closeButtonContainer.classList.add("text-end", "-mr-4")
  container.appendChild(closeButtonContainer)

  //closeButton
  const closeButton = document.createElement("button")
  closeButton.classList.add("text-white")
  closeButton.textContent = "X"
  closeButtonContainer.appendChild(closeButton)
  closeButton.addEventListener("click", () => {
    body.removeChild(popup)
  })

  //image
  const image = document.createElement("img")
  image.setAttribute("src", postersUtils[currentImgIndex].src)
  image.classList.add("md:max-h-full")
  container.appendChild(image)

  //descriptionBox
  const descriptionBox = document.createElement("div")
  descriptionBox.classList.add("bg-main-blue", "w-full")
  container.appendChild(descriptionBox)

  //descriptionHeader
  const descriptionHeader = document.createElement("p")
  descriptionHeader.textContent = postersUtils[currentImgIndex].name
  descriptionHeader.classList.add("text-white", "text-xl", "font-bold", "p-4")
  descriptionBox.appendChild(descriptionHeader)

  //socialsContainer
  const socialsContainer = document.createElement("div")
  socialsContainer.classList.add("flex", "px-4", "pb-4")
  descriptionBox.appendChild(socialsContainer)

  //behanceHref
  const behanceHref = document.createElement("a")
  const behanceIcon = document.createElement("img")
  behanceIcon.classList.add("h-7", "mr-3", `${!postersUtils[currentImgIndex].behance && "hidden"}`)
  behanceIcon.setAttribute("src", "images/social icons/behance-logo.png")
  behanceHref.setAttribute("href", postersUtils[currentImgIndex].behance)
  behanceHref.setAttribute("target", "_blank")
  behanceHref.appendChild(behanceIcon)
  socialsContainer.appendChild(behanceHref)

  //instagramHref
  const instagramHref = document.createElement("a")
  const instagramIcon = document.createElement("img")
  instagramIcon.classList.add("h-7", "mr-3", `${!postersUtils[currentImgIndex].instagram && "hidden"}`)
  instagramIcon.setAttribute("src", "images/social icons/instagram-logo.png")
  instagramHref.setAttribute("href", postersUtils[currentImgIndex].instagram)
  instagramHref.setAttribute("target", "_blank")
  instagramHref.appendChild(instagramIcon)
  postersUtils[currentImgIndex].instagram && socialsContainer.appendChild(instagramHref)

  //facebookHref
  const facebookHref = document.createElement("a")
  const facebookIcon = document.createElement("img")
  facebookIcon.classList.add("h-7", "mr-3", `${!postersUtils[currentImgIndex].facebook && "hidden"}`)
  facebookIcon.setAttribute("src", "images/social icons/fb-logo.png")
  facebookHref.setAttribute("href", postersUtils[currentImgIndex].facebook)
  facebookHref.setAttribute("target", "_blank")
  facebookHref.appendChild(facebookIcon)
  postersUtils[currentImgIndex].facebook && socialsContainer.appendChild(facebookHref)

  //pinterestHref
  const pinterestHref = document.createElement("a")
  const pinterestIcon = document.createElement("img")
  pinterestIcon.classList.add("h-7", "mr-3", `${!postersUtils[currentImgIndex].pinterest && "hidden"}`)
  pinterestIcon.setAttribute("src", "images/social icons/pinterest-logo.png")
  pinterestHref.setAttribute("href", postersUtils[currentImgIndex].pinterest)
  pinterestHref.setAttribute("target", "_blank")
  pinterestHref.appendChild(pinterestIcon)
  postersUtils[currentImgIndex].pinterest && socialsContainer.appendChild(pinterestHref)

  //nextArrow
  const nextArrow = document.createElement("button")
  nextArrow.textContent = ">"
  nextArrow.classList.add("absolute", "top-1/2", "translate-y-1/2", "-right-8", "text-3xl", "text-white")

  nextArrow.addEventListener("click", () => {
    currentImgIndex += 1

    image.setAttribute("src", postersUtils[currentImgIndex].src)

    if (postersUtils[currentImgIndex].pinterest && !pinterestHref.classList.contains("hidden")) {
      pinterestHref.setAttribute("href", postersUtils[currentImgIndex].pinterest)
    } else if (postersUtils[currentImgIndex].pinterest && pinterestHref.classList.contains("hidden")) {
      pinterestHref.classList.remove("hidden")
      pinterestHref.setAttribute("href", postersUtils[currentImgIndex].pinterest)
    } else if (!postersUtils[currentImgIndex].pinterest && !pinterestHref.classList.contains("hidden")) {
      pinterestHref.classList.add("hidden")
    }

    if (postersUtils[currentImgIndex].facebookHref && !facebookHref.classList.contains("hidden")) {
      facebookHref.setAttribute("href", postersUtils[currentImgIndex].facebook)
    } else if (postersUtils[currentImgIndex].facebook && facebookHref.classList.contains("hidden")) {
      facebookHref.classList.remove("hidden")
      facebookHref.setAttribute("href", postersUtils[currentImgIndex].facebook)
    } else if (!postersUtils[currentImgIndex].facebook && !facebookHref.classList.contains("hidden")) {
      facebookHref.classList.add("hidden")
    }

    if (postersUtils[currentImgIndex].instagramHref && !instagramHref.classList.contains("hidden")) {
      instagramHref.setAttribute("href", postersUtils[currentImgIndex].instagram)
    } else if (postersUtils[currentImgIndex].instagram && instagramHref.classList.contains("hidden")) {
      instagramHref.classList.remove("hidden")
      instagramHref.setAttribute("href", postersUtils[currentImgIndex].instagram)
    } else if (!postersUtils[currentImgIndex].instagram && !instagramHref.classList.contains("hidden")) {
      instagramHref.classList.add("hidden")
    }

    if (postersUtils[currentImgIndex].behanceHref && !behanceHref.classList.contains("hidden")) {
      behanceHref.setAttribute("href", postersUtils[currentImgIndex].behance)
    } else if (postersUtils[currentImgIndex].behance && behanceHref.classList.contains("hidden")) {
      behanceHref.classList.remove("hidden")
      behanceHref.setAttribute("href", postersUtils[currentImgIndex].behance)
    } else if (!postersUtils[currentImgIndex].behance && !behanceHref.classList.contains("hidden")) {
      behanceHref.classList.add("hidden")
    }

    descriptionHeader.textContent = postersUtils[currentImgIndex].name
    instagramHref.setAttribute("href", postersUtils[currentImgIndex].instagram)
    behanceHref.setAttribute("href", postersUtils[currentImgIndex].behance)
    facebookHref.setAttribute("href", postersUtils[currentImgIndex].facebook)
    pinterestHref.setAttribute("href", postersUtils[currentImgIndex].pinterest)

    currentImgIndex !== galleryLength - 1 ? container.appendChild(nextArrow) : container.removeChild(nextArrow)
    currentImgIndex !== 0 ? container.appendChild(prevArrow) : container.removeChild(prevArrow)
  })

  currentImgIndex !== galleryLength - 1 && container.appendChild(nextArrow)

  //prevArrow
  const prevArrow = document.createElement("button")
  prevArrow.textContent = "<"
  prevArrow.classList.add("absolute", "top-1/2", "translate-y-1/2", "-left-8", "text-3xl", "text-white")

  prevArrow.addEventListener("click", () => {
    currentImgIndex -= 1

    if (postersUtils[currentImgIndex].pinterest && !pinterestHref.classList.contains("hidden")) {
      pinterestHref.setAttribute("href", postersUtils[currentImgIndex].pinterest)
    } else if (postersUtils[currentImgIndex].pinterest && pinterestHref.classList.contains("hidden")) {
      pinterestHref.classList.remove("hidden")
      pinterestHref.setAttribute("href", postersUtils[currentImgIndex].pinterest)
    } else if (!postersUtils[currentImgIndex].pinterest && !pinterestHref.classList.contains("hidden")) {
      pinterestHref.classList.add("hidden")
    }

    if (postersUtils[currentImgIndex].facebookHref && !facebookHref.classList.contains("hidden")) {
      facebookHref.setAttribute("href", postersUtils[currentImgIndex].facebook)
    } else if (postersUtils[currentImgIndex].facebook && facebookHref.classList.contains("hidden")) {
      facebookHref.classList.remove("hidden")
      facebookHref.setAttribute("href", postersUtils[currentImgIndex].facebook)
    } else if (!postersUtils[currentImgIndex].facebook && !facebookHref.classList.contains("hidden")) {
      facebookHref.classList.add("hidden")
    }

    if (postersUtils[currentImgIndex].instagramHref && !instagramHref.classList.contains("hidden")) {
      instagramHref.setAttribute("href", postersUtils[currentImgIndex].instagram)
    } else if (postersUtils[currentImgIndex].instagram && instagramHref.classList.contains("hidden")) {
      instagramHref.classList.remove("hidden")
      instagramHref.setAttribute("href", postersUtils[currentImgIndex].instagram)
    } else if (!postersUtils[currentImgIndex].instagram && !instagramHref.classList.contains("hidden")) {
      instagramHref.classList.add("hidden")
    }

    if (postersUtils[currentImgIndex].behanceHref && !behanceHref.classList.contains("hidden")) {
      behanceHref.setAttribute("href", postersUtils[currentImgIndex].behance)
    } else if (postersUtils[currentImgIndex].behance && behanceHref.classList.contains("hidden")) {
      behanceHref.classList.remove("hidden")
      behanceHref.setAttribute("href", postersUtils[currentImgIndex].behance)
    } else if (!postersUtils[currentImgIndex].behance && !behanceHref.classList.contains("hidden")) {
      behanceHref.classList.add("hidden")
    }

    image.setAttribute("src", postersUtils[currentImgIndex].src)

    descriptionHeader.textContent = postersUtils[currentImgIndex].name
    instagramHref.setAttribute("href", postersUtils[currentImgIndex].instagram)
    behanceHref.setAttribute("href", postersUtils[currentImgIndex].behance)
    facebookHref.setAttribute("href", postersUtils[currentImgIndex].facebook)
    pinterestHref.setAttribute("href", postersUtils[currentImgIndex].pinterest)

    currentImgIndex !== 0 ? container.appendChild(prevArrow) : container.removeChild(prevArrow)
    currentImgIndex !== galleryLength - 1 ? container.appendChild(nextArrow) : container.removeChild(nextArrow)
  })

  currentImgIndex !== 0 && container.appendChild(prevArrow)
}

allImages.forEach(image => image.addEventListener("click", (e) => {
  const { id } = e.target
  const currentImgCategory = e.target.getAttribute("data-category")
  postersUtils = postersUtils.filter(image => currentImgCategory.toString() === image.category)
  galleryLength = postersUtils.length
  const imageId = postersUtils.findIndex(image => image.id === id)
  currentImgIndex = imageId
  createPopup()
}))