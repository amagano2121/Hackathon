
render(); {
    return (
      <form>
        <label for="username">
          Username:
        </ label>

        <label for="password">
          Password:
        </ label> 
        
        <input type="text" value={this.state.value} />

        <input type="submit" value="Submit" />
      </form>
    );
  }