ScrollReveal({
    origin: 'top',
    distance: '40px',
    duration: 650,
    reset: true
}).reveal(
`#intro,
#intro .content,
#intro .content .info,
#intro .content .tag,
#intro .content .description,
#intro .content .techs,
#intro .content .techs .tech,
#projects .content,
#projects .content header,
#intro .content .projects,
#intro .content .projects .proj
`,
{ interval: 100 }
)