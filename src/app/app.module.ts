import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { TeamsComponent } from "./teams/teams.component";
import { NbaService } from "./nba.service";
import { HttpClientModule } from "@angular/common/http";
import { PlayersComponent } from "./players/players.component";
import { HighlightDirective } from "./highlight.directive";
import { TransformPipe } from "./transform.pipe";
import { FormsModule } from "@angular/forms";
import { RouterModule, RouterOutlet} from "@angular/router";
import { routes } from "./app.routes";



@NgModule({
    declarations:[AppComponent, TeamsComponent, PlayersComponent, HighlightDirective, TransformPipe],
    imports:[BrowserModule,
        CommonModule,
        HttpClientModule,
        TeamsComponent,
        PlayersComponent,
        RouterOutlet,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule, TransformPipe, HighlightDirective],

    providers:[NbaService],
bootstrap:[AppComponent]
})

export class AppModule {

}
