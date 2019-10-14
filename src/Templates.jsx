import React from "react"
import { Template, Button, H1, Nav, Section, P } from "./App.style"

const Templates = () => {
  // Getting all storage items here
  let items = { ...localStorage }

  // Not Found Component
  const NotFound = () => {
    return (
      Object.keys(items).length === 0 && (
        <P>There is no template, Please create one. Thank you!</P>
      )
    )
  }
  // Listing Component
  const Listing = () => {
    return Object.keys(items).map((v, k) => (
      <Template key={k}>
        <P>{v}</P>
        <Button to={`/edit/${v}`} borderonhover="true">
          Edit
        </Button>
      </Template>
    ))
  }

  return (
    <>
      <Nav transparent>
        <H1>Templates</H1>
        <Button to="/new">New Template</Button>
      </Nav>
      <Section>
        <NotFound />
        <Listing />
      </Section>
    </>
  )
}

export default Templates
