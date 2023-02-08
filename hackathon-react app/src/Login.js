//This is where the login will be

render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Username:
          <input type="text" value={this.state.value} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }