import {ChangeDetectorRef, Component, OnDestroy, Inject} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { ChatAdapter } from 'ng-chat';
import { SocketIOAdapter } from './socketio-adapter'
import { Socket } from 'ng-socket-io';
import { Http } from '@angular/http';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {SurveyDialogComponent} from './survey-dialog/survey-dialog.component'
export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'hackathon';
  favoriteSeason: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
  events: string[] = [];
  opened: boolean = true;
  mobileQuery: MediaQueryList;
  userId: string;
  username: string;

  animal: string;
  name: string;

  public adapter: ChatAdapter;

  fillerNav = ['Billing', 'Events', 'Messaging', "labs", 'admin', 'physician/1', 'patient/1'];

  fillerContent = Array.from({length: 50}, () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);

  private _mobileQueryListener: () => void;

  constructor(public dialog: MatDialog, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private socket: Socket, private http: Http) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.InitializeSocketListerners();

  }
  openDialog(): void {
      const dialogRef = this.dialog.open(SurveyDialogComponent, {
        width: '50%',
        data: {name: this.name, animal: this.animal}
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.animal = result;
      });
    }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  public joinRoom(): void
  {
    this.socket.emit("join", this.username);
  }

  public InitializeSocketListerners(): void
  {
    this.socket.on("generatedUserId", (userId) => {
      // Initializing the chat with the userId and the adapter with the socket instance
      this.adapter = new SocketIOAdapter(userId, this.socket, this.http);
      this.userId = userId;
    });
  }
}
