<div align="center">

# CollegeProjectYr1

**A static multi-page website for a fictional reforestation non-profit, built as the primary Year 1 coding project for a BTEC Cybersecurity Level 3 course.**

[![HTML](https://img.shields.io/badge/html-drew?style=flat-square&logo=html5&logoColor=FFFFFF&color=E34C26)](https://html.spec.whatwg.org/)
[![CSS](https://img.shields.io/badge/css-drew?style=flat-square&logo=css&logoColor=FFFFFF&color=663399)](https://www.w3.org/TR/css/#css)
[![Bootstrap](https://img.shields.io/badge/bootstrap-5.3-7952B3?style=flat-square&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](LICENSE)

</div>

---

Green Roots is a fictional organisation that combines local reforestation with real-world digital training for aspiring developers. The site demonstrates multi-page HTML/CSS structure, accessibility practices, Bootstrap 5 layout, and OpenGraph/Twitter Card metadata. Live at [collegeproject.drew-gnr.xyz](https://collegeproject.drew-gnr.xyz/).

---

## Pages

| Page | Path | Description |
|------|------|-------------|
| Home | `index.html` | Hero, mission summary, and call to action |
| About | `html/about.html` | Organisation background |
| Our Team | `html/team.html` | Team member profiles |
| Careers | `html/careers.html` | Open roles and how to apply |
| Apply / Donate | `html/apply.html` | Volunteer and donation form |
| Resources | `html/resources.html` | External links and materials |
| Tools | `html/tools.html` | Password-protected internal tools page |

---

## Note on the Tools page

The password gate and the volunteer/donation form on `html/tools.html` and `html/apply.html` are **client-side demos only**. The "password" is checked in JavaScript in the browser and the form does not submit anywhere - there is no backend, no real authentication, and no data is stored or sent. They exist to demonstrate UI/markup for the coursework, not to provide actual security.

---

## Tech Used

- **Bootstrap 5.3** via CDN for responsive layout and nav
- **Font Awesome 6.5** for icons
- **Custom CSS** at `css/style.css`
- **OpenGraph and Twitter Card** meta tags for social sharing
- Skip-to-main-content link and `aria-*` attributes throughout for accessibility

---

## Get the Code

Clone with git:

```bash
git clone https://github.com/drew-codes-things/AssignmentYr1.git
```

Or with the [GitHub CLI](https://cli.github.com/):

```bash
gh repo clone drew-codes-things/AssignmentYr1
```

## License

MIT - made by [Drew](https://github.com/drew-codes-things)
