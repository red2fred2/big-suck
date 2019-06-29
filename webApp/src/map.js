function renderMap(scan) {
  let i = 0
  const points = scan.points.map(point =>
  <Point x={point.x} y={point.y} key={i++}/>
)

  ReactDOM.render(points, document.getElementById('map'))
}

class Point extends React.Component {
  render() {
    const x = 50 + this.props.x*10,
          y = 50 - this.props.y*10

    return <ellipse cx={x+'%'} cy={y+'%'} rx=".3%" ry=".3%"/>
  }
}
