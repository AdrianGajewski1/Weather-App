﻿using Microsoft.AspNet.SignalR.Hubs;
using Microsoft.AspNetCore.SignalR;
using Serilog;
using System;
using System.Linq;
using System.Threading.Tasks;
using WeatherApp.API.Services.Services;

namespace WeatherApp.API.SignalR.Hubs
{
    [HubName("Notifications")]
    public class NotificationHub : Hub
    {
        private readonly ISignalRConnectionsManager _signalRConnectionsManager;

        public NotificationHub(ISignalRConnectionsManager signalRConnectionsManager)
        {
            _signalRConnectionsManager = signalRConnectionsManager;
        }

        public string GetConnectionID(string userID)
        {
            if(_signalRConnectionsManager.GetConnections(userID) != null)
            {
                return _signalRConnectionsManager.GetConnections(userID).FirstOrDefault();
            }

            _signalRConnectionsManager.AddConnection(userID, Context.ConnectionId);

            return Context.ConnectionId;
        }

        public override Task OnConnectedAsync()
        {
            Log.Information($"Connecting on Notifications hub from { Context.ConnectionId} ");
            return base.OnConnectedAsync();
        }

        public override Task OnDisconnectedAsync(Exception exception)
        {
            Log.Information($"Diconnecting on Notifications hub from { Context.ConnectionId} ");

            _signalRConnectionsManager.RemoveConnection(Context.ConnectionId);
            return base.OnDisconnectedAsync(exception);
        }
    }
}
