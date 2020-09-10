// from data.js
var tableData = data;

//Finding unique country names to use in drop down menu
var unique_country_name = [...new Set(tableData.map((item) => item.country))];

//Code to add the unique country names to select drop down.
var select_country = d3.select("#country");
select_country.html("");
select_country.append("option").text("Select");
unique_country_name.forEach((item) => {
	select_country.append("option").text(item);
});

//Finding unique State names to use in drop down menu
var unique_state_name = [...new Set(tableData.map((item) => item.state))];

//Code to add the unique state names to the select options
var select_state = d3.select("#state");
select_state.html("");
select_state.append("option").text("Select");
unique_state_name.forEach((item) => {
	select_state.append("option").text(item);
});

//Finding unique City names to use in drop down menu
var unique_city_name = [...new Set(tableData.map((item) => item.city))];

//Code to add the unique city names to the select options
var select_city = d3.select("#city");
select_city.html("");
select_city.append("option").text("Select");
unique_city_name.forEach((item) => {
	select_city.append("option").text(item);
});

//Code to get the unique shape values from table.
var unique_shape_name = [...new Set(tableData.map((item) => item.shape))];

//Code to add the unique shapes to the filter box.
var select_shape = d3.select("#shape");
select_shape.html("");
select_shape.append("option").text("Select");
unique_shape_name.forEach((item) => {
	select_shape.append("option").text(item);
});
console.log(unique_state_name);

// Select the filter button.
var button = d3.select("#filter-btn");

button.on("click", showData);

function showData() {
	// Prevent the screen from refershing.
	d3.event.preventDefault();

	var dateElement = d3.select("#datetime");

	dateValue = dateElement.property("value");
	countryvalue = select_country.property("value");
	statevalue = select_state.property("value");
	cityvalue = select_city.property("value");
	shapevalue = select_shape.property("value");
	console.log(countryvalue);
	var totalData = tableData;
	if (dateValue !== "") {
		var filteredData = totalData.filter((item) => item.datetime === dateValue);
		totalData = filteredData;
	}
	if (countryvalue !== "Select") {
		var filteredData = totalData.filter(
			(item) => item.country === countryvalue
		);
		totalData = filteredData;
	}
	if (statevalue !== "Select") {
		var filteredData = totalData.filter((item) => item.state === statevalue);
		totalData = filteredData;
	}
	if (cityvalue !== "Select") {
		var filteredData = totalData.filter((item) => item.city === cityvalue);
		totalData = filteredData;
	}
	if (shapevalue !== "Select") {
		var filteredData = totalData.filter((item) => item.shape === shapevalue);
		totalData = filteredData;
	}

	var date = totalData.map((item) => item.datetime);
	var city = totalData.map((item) => item.city);
	var State = totalData.map((item) => item.state);
	var Country = totalData.map((item) => item.country);
	var Shape = totalData.map((item) => item.shape);
	var Duration = totalData.map((item) => item.durationMinutes);
	var Comments = totalData.map((item) => item.comments);

	var table_body = d3.select("#table-body");
	// Empty the table first.
	table_body.html("");
	for (var i = 0; i < date.length; i++) {
		var table_row = table_body.append("tr");
		table_row.append("td").text(date[i]);
		table_row.append("td").text(city[i]);
		table_row.append("td").text(State[i]);
		table_row.append("td").text(Country[i]);
		table_row.append("td").text(Shape[i]);
		table_row.append("td").text(Duration[i]);
		table_row.append("td").text(Comments[i]);
	}
}
