import React from 'react'
import './Component3.css'

const Component3 = () => {
  return (
    <div>
		<div class="container">
			<div class="weather-sun">
				<div class="sun">
					<div class="rays"></div>
					<div class="rays"></div>
					<div class="rays"></div>
					<div class="rays"></div>
				</div>
			</div>
			<div class="weather-cloud">
				<div class="cloud"></div>
				<div class="cloud"></div>
			</div>
			<div class="weather-snow">
				<div class="snow">
					<div class="f"></div>
				</div>
			</div>
			<div class="weather-cloudAndSun">
				<div class="cloud"></div>
				<div class="sun">
					<div class="rays"></div>
					<div class="rays"></div>
					<div class="rays"></div>
					<div class="rays"></div>
				</div>
			</div>
			<div class="weather-rain">
				<div class="cloud"></div>
				<div class="rain"></div>
				<div class="rain"></div>
				<div class="rain"></div>
				<div class="rain"></div>
			</div>
		</div>
    </div>
  )
}

export default Component3