let totalClicks = 0;
$(document).ready(onReady);

function onReady() {
  $('.colorButton').on('click', divMaker);
  $('.divZone').on('click', '.yellowButton', yellofier);
  $('.divZone').on('click', '.deleteButton', deleter);
}

function divMaker() {
  totalClicks++;
  console.log('in div maker');
  let divBody = $('.divZone');
  divBody.append(
    `<div class="css-div"><p>${totalClicks}</p><button class="yellowButton">yellow<button class="deleteButton">delete</div>`
  );
}

function yellofier() {
  $(this).parent().css('background-color', 'yellow');
}

function deleter() {
  totalClicks--;
  $(this).parent().remove();
}
