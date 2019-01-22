var React = require("react");
var DefaultLayout = require('./layouts/defaultlayout');
var NavBar_Container = require('./components/navbar_container')

class CreatePage extends React.Component {
    render() {
        return(
            <DefaultLayout loggedIn={this.props.loggedin} user={this.props.user}>
                <NavBar_Container />

<form method="POST" action="/new">
  <div class="form-group">
    <label for="title">Title</label>
    <input type="email" class="form-control" id="title" placeholder="e.g Play bowling" />
  </div>
    <div class="form-group">
    <label for="category">Select Category</label>
    <select class="form-control" id="category">
      <option>Sit & Play</option>
      <option>Sit & Chill</option>
      <option>Move Around</option>
      <option>Work it Out</option>
    </select>
  </div>
    <div class="form-group">
    <label for="price">Price</label>
    <input type="email" class="form-control" id="price" placeholder="$8.50" />
  </div>
    <div class="form-group">
    <label for="description">Description</label>
    <textarea class="form-control" id="description" rows="3"></textarea>
  </div>
  <div class="form-group">
    <label for="activityPicture1">Upload Activity Image</label>
    <input type="file" class="form-control-file" id="activityPicture1" />
  </div>
</form>

            </DefaultLayout>



            )
    }
}

module.exports = CreatePage

// '<form method="POST" action="/pokemon/'+pokemon.id+'?_method=PUT">'+
//   '<div class="pokemon-attribute">'+
//     'id: <input name="id" type="text" value="'+pokemon.id+'"/>'+
//     'name: <input name="name" type="text" value="'+pokemon.name+'"/>'+
//   '</div>'+
// '</form>';