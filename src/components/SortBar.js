import Form from 'react-bootstrap/Form';

const sort = ["None", "Duration: Fastest",  "Duration: Longest", "Cost: Cheapest", "Cost: Most Expensive"];


export default function SortBar(props) {
    return (
        <div className="sort-wrap">
            <p>Sort By</p>
            <Form>
                {sort.map((sort) => {
                    return (
                        <Form.Check
                            name="sort"
                            type="radio"
                            label={sort}
                            defaultChecked={sort === "None"}
                            value={sort}
                            onChange= {(e) => props.setSort(e.target.value)}
                        />
                    )
                }
                )}
            </Form>



        </div>
    )
}
