const maxRs = []

function renderMap(scan) {
  let i = 0
  const maxR = scan.points.reduce((a, c) => Math.max(a, c.range), 0)
        maxRs.push(maxR)
  const avgR = maxRs.reduce((a, c) => a+c) / maxRs.length,

        points = scan.points.map(point =>
          <Point x={point.x} y={point.y} pMult={50/avgR} key={i++}/>
        )

        if(maxRs.length > 70) maxRs.shift()

  ReactDOM.render(points, document.getElementById('map'))
}

class Point extends React.Component {
  render() {
    const x = 50 + this.props.x*this.props.pMult,
          y = 50 - this.props.y*this.props.pMult

    return <ellipse cx={x+'%'} cy={y+'%'} rx=".4%" ry=".4%"/>
  }
}
