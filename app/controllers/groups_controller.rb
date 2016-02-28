class GroupsController < ApplicationController
  def index
    groups = [
      {
        id: 1,
        missionName: 'Madison Field Hospital',
        time: '8:00AM',
        players: [{id: 1, level: 20}, {id: 2, level: 30}, {id: 3, level: 25}]
      },
      {
        id: 2,
        missionName: 'Establish Base of Operations',
        time: '10:00AM',
        players: [{id: 4, level: 14}, {id: 5, level: 18}, {id: 6, level: 20}]
      },
      {
        id: 3,
        missionName: 'Darkzone Patrol',
        time: 'NOW',
        players: [{id: 7, level: 8}, {id: 8, level: 3}, {id: 9, level: 6}]
      }
    ]

    render json: groups
  end
end
