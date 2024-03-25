import React from 'react'

function loading() {
  return (
    <div className="flex justify-center h-screen items-center mb-12">
      <img class="w-10 h-10 animate-spin" src="https://www.svgrepo.com/show/491270/loading-spinner.svg" alt="Loading icon"/>
    </div>
  )
}

export default loading