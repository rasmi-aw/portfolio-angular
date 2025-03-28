import {Component, OnInit, Output} from '@angular/core';
import {Portfolio} from "../portfolio";
import {ProjectSTATE} from "../project-state";
import {Router} from "@angular/router";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  title: any;
  @Output() portfolio: Portfolio | undefined;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.portfolio = {
      fullname: "Abdelouadoud Rasmi",
      job: "Java developer",
      description: "",
      linkGithub: "https://github.com/rasmi-aw",
      linkTwitter: "https://github.com/rasmi-aw",
      linkInstagram: "https://github.com/rasmi-aw",
      linkFacebook: "https://github.com/rasmi-aw",
      projects:
        [
          {
            state: ProjectSTATE.FINISHED,
            id: 1,
            featured: true,
            name: "Project name",
            date: "October 10th, 2023",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
          },
          {
            state: ProjectSTATE.ON_GOING,
            id: 2,
            featured: true,
            name: "Project name",
            date: "October 10th, 2023",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
          },
          {
            state: ProjectSTATE.NOT_STARTED,
            id: 3,
            featured: true,
            name: "Project name",
            date: "October 10th, 2023",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
          }
        ]
    }
    this.title = this.portfolio?.fullname + ' | Portfolio'
  }

}
