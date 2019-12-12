let climbs = [];

const addToDom = () => {
  $('#where-cards-go').html('');

  climbs.forEach(climb => {
    $('#where-cards-go').append(
      `<div class="card">
        <h3>Climb: ${climb.name}</h3>
        <h3>Grade: ${climb.grade}</h3>
        <hr>
        <p>${climb.description}</p>
        <button type="button" id="${climb.id}">SENT IT!</button>
      </div>`
    )
  })
}

const createObj = () => {
  let name = $('#climb-name').val();
  let grade = $('#climb-grade').val();
  let desc = $('#climb-description').val();
  let climb = new Card(name, grade, desc);

  climbs.unshift(climb);
  
  addToDom();
  
  $('#climb-name').val('');
  $('#climb-grade').val('');
  $('#climb-description').val('');
}

const chrisSharma = () => {
  $('#where-cards-go').html('<iframe src="https://giphy.com/embed/l2Je9nRbkw4uka1Z6" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/climbing-mallorca-rock-l2Je9nRbkw4uka1Z6"></a></p>')
}

const removeSharma = () => {
  $('#where-cards-go').html()
}

const deleteCard = (e) => {
  let cardID = e.target.id;
  let newClimbs = climbs.filter(climb => climb.id !== parseInt(cardID))
  climbs = newClimbs;
  chrisSharma();
  setTimeout(addToDom, 5350);
}

$('#input-info').click(createObj);
$('#where-cards-go').click(deleteCard);
