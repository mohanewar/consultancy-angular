import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
    let arrow = document.querySelectorAll(".arrow");
    for (let i = 0; i < arrow.length; i++) {
      arrow[i].addEventListener("click", (e) => {
        let arrowParent = (e.target as HTMLElement).parentElement?.parentElement; // selecting main parent of arrow
        if (arrowParent) {
          arrowParent.classList.toggle("showMenu");
        }
      });
    }

    let sidebar = document.querySelector(".sidebar");
    let sidebarBtn = document.querySelector(".bx-menu");

    sidebarBtn?.addEventListener("click", () => {
      sidebar?.classList.toggle("close");
    });

    sidebar?.addEventListener("mouseenter", () => {
      sidebar?.classList.remove("close");
    });

    sidebar?.addEventListener("mouseleave", () => {
      sidebar?.classList.add("close");
    });
   
  }


}
