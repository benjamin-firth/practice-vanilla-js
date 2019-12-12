const climbs = [];

const addToDom = () => {
  $('#where-cards-go').html('');

  const giveClimbs = () => {
    climbs.forEach(climb => {
      $('#where-cards-go').append(`
        <div class="card">
          <h3>Climb: ${climb.name}</h3>
          <h3>Grade: ${climb.grade}</h3>
          <p>Description:</p>
          <p>${climb.description}</p>
          <button type="button" id="delete-button">SENT IT!</button>
        </div>
      `)
    })
  }

  giveClimbs();
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


$('#input-info').click(createObj);
