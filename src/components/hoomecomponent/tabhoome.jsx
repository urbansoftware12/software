import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

// import Sonnet from '../../components/Sonnet';

function tabhoome() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="showall" title="Show All">
        {/* <Sonnet /> */}
        <div>dsad</div>
      </Tab>
      <Tab eventKey="design" title="Design">
        <div>Bila</div>
        {/* <Sonnet /> */}
      </Tab>
      <Tab eventKey="branding" title="Branding">
        {/* <Sonnet /> */}
      </Tab>
      <Tab eventKey="illustration" title="Illustration">
        {/* <Sonnet /> */}
      </Tab>
      <Tab eventKey="motion" title="Motion">
        {/* <Sonnet /> */}
      </Tab>
    </Tabs>
  );
}

export default tabhoome;