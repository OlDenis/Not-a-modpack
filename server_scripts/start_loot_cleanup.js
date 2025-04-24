// This script removes any item in the player inventory when they log in for the first time

PlayerEvents.loggedIn(event => {
    if(event.player.stages.has('logged_in')) return
    event.player.stages.add('logged_in')
    
    event.player.inventory.clearContent()
  })