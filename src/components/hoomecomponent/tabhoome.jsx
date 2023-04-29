// import Tab from 'react-bootstrap/Tab';
// import Tabs from 'react-bootstrap/Tabs';

// import Sonnet from '../../components/Sonnet';

function tabhoome() {
  return (
    // <Tabs
    //   defaultActiveKey="profile"
    //   id="uncontrolled-tab-example"
    //   className="mb-3"
    // >
    //   <Tab eventKey="showall" title="Show All">
    //     <div>dsad</div>
    //   </Tab>
    //   <Tab eventKey="design" title="Design">
    //     <div>Bila</div>
    //   </Tab>
    //   <Tab eventKey="branding" title="Branding">
    //   </Tab>
    //   <Tab eventKey="illustration" title="Illustration">
    //   </Tab>
    //   <Tab eventKey="motion" title="Motion">
    //   </Tab>
    // </Tabs>
    <div className="container mt-3">
      <div className="row">
        <div className="offset-md-3 col-md-6">
        <ul className="nav nav-tabs">
    <li className="nav-item">
      <a className="nav-link active" data-toggle="tab" href="#hime">Home</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" data-toggle="tab" href="#menuu1">Menu 1</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" data-toggle="tab" href="#menuu2">Menu 2</a>
    </li>
  </ul>
        </div>
      </div>
  
  <div className="tab-content">
    <div id="hime" className="container tab-pane active"><br/>
      <h3>HOME</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <div id="menuu1" className="container tab-pane fade active"><br/>
      <h3>Menu 1</h3>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
    <div id="menuu2" className="container tab-pane fade"><br/>
      <h3>Menu 2</h3>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
    </div>
  </div>
</div>
  );
}

export default tabhoome;