# Create a Survey

There are many cases where opinions or polls from the audience are needed. This section provides you with one approach using the Switch Tool.

## Scenario

You want to create a live survey about the mensa at the Leuphana. The audience is divided into 5 groups, each have a tablet. On each tablet, there is a slide containing following YES/NO questions:

- Does the food served come from various cuisines?
- Are the food served priced reasonably?
- Are the food served nutritious enough?

On the monitor, a bar chart displays the survey results (questions on X-axis, votes on Y-axis). This means, for this survey, you need to create 6 slides: 5 for the tablets, 1 for the monitor.

## Overall logic - How it works

- Since they are YES/NO questions, we opt for the Switch tool to record the answers.
- For each of the question, you create **one** switch with **one** variable that contains any of/all votes from the tablets. This switch can later be placed on each of the tablet's slide, and is independent from the number of tablets you may have (you can have 10 groups and still only need one switch function for one question).
- All switches are off on initializing the tablets.
- Each time a switch is flipped on (a group votes YES), the tally variable +=1.
- Each time a switch is flipped back off (a group retracts their vote), the tally variable -=1.
- Tally variables of all questions are fed into the chart, and the results are displayed dynamically on the big monitor.

## Template for the switches

Here I already wrote a function called `switch_template`. As the name suggests, this serves as a template to create the `get_` and `set_` function pair, as well as the tally variable for any switch you might need. For example,
`def switch_template(switch_name='mensa', index=1)`
will create:

- Function `get_switch_mensa_nr_1`
- Function `get_switch_mensa_nr_1`
- Tally variable `mensa_nr_1_total`

:::tip Python exkurs
Instead of naming the tally variable for each of the questions manually, we use `globals()` to create a variable from a string. This way we can create loops and numbering our variables efficiently.
:::

:::danger Disclaimer: Accidental browser refresh vs. incorrect survey results
Because of the connection between the backend (this notebook) and the frontend (the web browsers), there is currently no way to pinpoint which version of the switch is on which tablet. In other words, we only have this accummulated information of _how many votes are casted in total_, not _which groups have casted the votes_. This plays a crucial role in an error occurred during the beta phase, where a tablet browser from a group is accidentally refreshed during voting, which leads to a reset in the tally variable but not the state of the switch (e.x. switch still turned on but tally variable doesn't count the vote). Thus, if the group decides to turn off the switch, it cause the tally variable to incorrectly be subtracted, and in some cases leads to negative results. I prevented this with an `elif` in the `set_switch` function. If it happens that a browser is refreshed, a quick fix would be to tell all groups to turn all the switch off and vote again.
:::

```python
def switch_template(switch_name, index):
    """Create get and set switches for voting, based on the survey and the index of questions in that survey.
    Result in all variables and functions with that number.
    Example: running switch_sdg_template(1, 1) results in creating functions get_switch_m1_sdg_1(),
    set_switch_m1_sdg_1()

    Args:
        switch_name (int): Name of the switch, muss related to the
        number (int): SDG number
    """
    globals()[f'{switch_name}_nr_{index}_total'] = 0

    def get_switch(self):

        # Here you can define the default state of the switch (when the page loads)
        if globals()[f'{switch_name}_nr_{index}_total']:
            return False
        else:
            return True

    # Append the newly defined function to class tool_switch
    setattr(tool_switch, f'get_switch_{switch_name}_nr_{index}', get_switch)

    def set_switch(self, switch_state):
        globals()[f'{switch_name}_nr_{index}_total']

        # Here you decide what happens when the switch is flipped on / off
        if switch_state:
            globals()[f'{switch_name}_nr_{index}_total'] = globals()[f'{switch_name}_nr_{index}_total'] + 1
        elif globals()[f'{switch_name}_nr_{index}_total'] > 0:
            globals()[f'{switch_name}_nr_{index}_total'] = globals()[f'{switch_name}_nr_{index}_total'] - 1

    # Append the newly defined function to class tool_switch
    setattr(tool_switch,  f'set_switch_{switch_name}_nr_{index}', set_switch)
```

### Switches for all questions

Warping it one more time in a loop allows us to "clone" the switch functions for however many questions we need in a survey. In our case, we need `create_switches(switch_name='mensa', amount=3)`

Again, the amount here refers to the number of the questions, not the number of the tablets/audience groups.

```python
def create_switches(switch_name, amount):

    for i in range(1, amount + 1):
        switch_template(switch_name, i)

create_switches('mensa', 3)
```

### Define the bar chart

The voting results are aggregated into the function `get_mensa_chart`. Here, you are freely to design how the result chart looks like.

```python
def get_mensa_chart(self):
    my_chart = MoloeweChart()

    switch_name = 'mensa'
    amount = 3

    # Create dataframe from all questions
    vote = [globals()[f'{switch_name}_nr_{index}_total'] for index in range(1, amount + 1)]
    text = ['Various Cuisines', 'Reasonable Prices', 'Nutritrous']
    df_vote = pd.DataFrame.from_dict({'text': text, 'vote': vote})

    # Bar plot
    f = px.bar(df_vote, x = f'text', y = "vote",
                template="plotly_white")

    f.update_yaxes(range=[0,5], showticklabels=True)
    f.update_xaxes(showticklabels=True)

    f. update_layout(
        xaxis_title="Questions",
        yaxis_title="Votes",
        title='Survey on Leuphana\'s Mensa'
    )

    return my_chart.moloewe_chart_plot(plotly_data=f.to_dict(), plotly_config=dict())

setattr(tool_graph, "get_mensa_chart", get_mensa_chart)
```

## Testing Zone

Here you can test run your code using the block below to generate the survey chart.

**NOTE**: This part MUST be commented out when you upload the notebook onto server.

```python
# Initialize code

from moloewe_chart import MoloeweChart

def initialize_local_testing(local_data_path):
    project_data = {
        'folder_project_data': local_data_path + '/data/',
        'folder_project_image': local_data_path + '/image/',
        'folder_project_text': local_data_path + '/text/',
        'folder_project_video': local_data_path + '/video/',
        'folder_project_output': local_data_path + '/output/'
    }
    return project_data


# Load local path (create all 5 asset folders within this path and put files in "data")
local_path = r'D:/codes/sustil' # Give your own path

project_data = initialize_local_testing(local_path)

# Initialize Moloewe() instance
local_testing = Moloewe().project_initialize(project_data)

# Initialize all testing objects
plot_test = MoloeweChart()
tool_map_test = tool_map()
tool_graph_test = tool_graph()
tool_switch_test = tool_switch()
tool_dropdown_test = tool_dropdown()
tool_slider_test = tool_slider()

# Initialize the three question switches

tool_switch_test.get_switch_mensa_nr_1()
tool_switch_test.get_switch_mensa_nr_2()
tool_switch_test.get_switch_mensa_nr_3()

# Try switching on and off
# This following scenario means 2 groups chose Q1, 3 groups chose Q2 and 5 groups chose Q3

tool_switch_test.set_switch_mensa_nr_1(True)
tool_switch_test.set_switch_mensa_nr_1(True)

tool_switch_test.set_switch_mensa_nr_3(True)
tool_switch_test.set_switch_mensa_nr_3(True)
tool_switch_test.set_switch_mensa_nr_3(True)

tool_switch_test.set_switch_mensa_nr_3(True)
tool_switch_test.set_switch_mensa_nr_3(True)
tool_switch_test.set_switch_mensa_nr_3(True)
tool_switch_test.set_switch_mensa_nr_3(True)
tool_switch_test.set_switch_mensa_nr_3(True)

# Check the survey chart

plot_test.moloewe_plot_preview(tool_graph_test.get_mensa_chart())

# Now one group decided to retract their vote to question 3

tool_switch_test.set_switch_mensa_nr_3(False)

# Check the survey chart again

plot_test.moloewe_plot_preview(tool_graph_test.get_mensa_chart())
```
